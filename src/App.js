import React from 'react';
import logo from './logo.svg';
import './App.css';
import Controls from "./Controls";
import Status from "./Status";

class App extends React.Component{
    //BACKEND_IP = "http://kiritnarain.com/dragonbackend";
    //BACKEND_IP = "http://localhost:5091";


    constructor(props) {
        super(props);
        this.state = {
            serverIP: 'http://139.162.48.23:5090',
            speed: 1000 //Range >500 to 1000
        };
    }



    render() {
        return (
            <div className="App">
                <Status serverIP={this.state.serverIP}></Status>
                <Controls serverIP={this.state.serverIP} speed={this.state.speed}></Controls>
            </div>
        );
    }


}

export default App;
