import React from 'react';
import logo from './logo.svg';
import './App.css';
import Controls from "./Controls";

class App extends React.Component{
    //BACKEND_IP = "http://kiritnarain.com/dragonbackend";
    //BACKEND_IP = "http://localhost:5091";


    constructor(props) {
        super(props);
        this.state = {
            serverIP: undefined,
            speed: 1000 //Range >500 to 1000
        };
    }

    componentDidMount() {
        this.fetchIP();

        setInterval(() => {
            this.fetchIP();
        }, 30000);
    }

    fetchIP(){
        /*fetch('/dragonbackend/getIP') //Uses backend defined in proxy
            .then(response => {
                console.log('Got Dragon IP: '+response.body);
                if(response!=="0.0.0.0"){
                    this.setState({
                        serverIP: response.body
                    });
                }
            });*/
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = () => {
        if(xhttp.readyState === XMLHttpRequest.DONE) {
            var status = xhttp.status;
            if (status === 0 || (status >= 200 && status < 400)) {
                // The request has been completed successfully
                var ip = xhttp.responseText;
                console.log('Got Dragon IP: '+ip);
                if(ip!=="0.0.0.0"){
                    this.setState({
                        serverIP: ip
                    });
                }
            } else {
                // Oh no! There has been an error with the request!
                console.log('Error: '+status)
            }
        }

        };
        xhttp.open("GET", '/dragonbackend/getIP', true);
        xhttp.send();
    }



    render() {
        return (
            <div className="App">
                <Controls serverIP={this.state.serverIP} speed={this.state.speed}></Controls>
            </div>
        );
    }


}

export default App;
