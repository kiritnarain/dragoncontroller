import React from 'react';
//Props: serverIP
class Status extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isConnected: false,
            SSID: ""
        }
    }

    componentDidMount = () => {
        this.fetchStatus();
        setInterval(()  => {
           this.fetchStatus();
        }, 15000);
    };

    fetchStatus = () => {
        const getReq = this.props.serverIP+"/status";
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = () => {
            var response = xhttp.responseText;
            console.log("status updated: "+response);
            if(response){
                var status = JSON.parse(response);
                this.setState({
                    isConnected: status.isConnected,
                    SSID: status.wifiSSID
                });
            }
        };
        xhttp.open("GET", getReq, true);
        xhttp.send();
    };

    resetWifi = () => {
        if(this.props.serverIP!==undefined){
            const getReq = this.props.serverIP + "/resetwifi";
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                console.log("wifi reset");
            };
            xhttp.open("GET", getReq, true);
            xhttp.send();
            this.setState({
                isConnected: false,
                SSID: ""
            });
        }
    };

    showStatus(){
        if(this.state.isConnected){
            return (<p>Dragon Droid is Connected with SSID: {this.state.SSID}</p>)
        }else{
            return (<p>Dragon Droid disconnected.</p>)
        }
    }


    render() {
        return (<div>
            ${this.showStatus()}
            <button onClick={this.fetchStatus}><i className="material-icons">autorenew</i></button>
            <button onClick={this.resetWifi}><i className="material-icons">settings_input_antenna</i></button>
        </div>);
    }

}
export default Status;