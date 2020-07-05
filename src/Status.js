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


    render() {
        if(this.state.isConnected){
            return (<p>Dragon Droid is Connected with SSID: ${this.state.SSID}</p>)
        }else{
            return (<p>Dragon Droid disconnected.</p>)
        }
    }

}
export default Status;