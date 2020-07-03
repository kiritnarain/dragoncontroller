import React from 'react';
import logo from './logo.svg';
import './App.css';
import Controls from "./Controls";

class App extends React.Component{
    BACKEND_IP = "http://localhost:5091";

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
        fetch(this.BACKEND_IP+'//getIP')
            .then(response => {
                console.log('Got Dragon IP: '+response);
                if(response!=="0.0.0.0"){
                    this.setState({
                        serverIP: response
                    });
                }
            });
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
