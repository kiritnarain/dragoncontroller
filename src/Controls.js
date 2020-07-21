import React from 'react';
import './Controls.css';

/**
 * Props: serverIP, speed
 */
class Controls extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lowSpeed: 600,
            highSpeed: 1000
        }
    }

    move = (deg) => {
        if(this.props.serverIP!==undefined){
            const getReq = this.props.serverIP + "/move?dirDeg=" + deg + "&speed=" + this.props.speed;
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                console.log("move dir changed");
            };
            xhttp.open("GET", getReq, true);
            xhttp.send();
        }

    };

    stop = () => {
        if(this.props.serverIP!==undefined) {
            const getReq = this.props.serverIP + "/stop";
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                console.log("movement stopped");
            };
            xhttp.open("GET", getReq, true);
            xhttp.send();
        }
    };

    render() {
        return (
            <div className="centered">
                <table className="box">
                    <tbody>

                    <tr>
                        <td>
                            <button onMouseDown={() => this.move(315)} onMouseUp={this.stop} onTouchStart={() => this.move(315)} onTouchEnd={this.stop} >
                                <i className="material-icons flippedIcon">call_made</i>
                            </button>
                        </td>
                        <td>
                            <button onMouseDown={() => this.move(0)} onMouseUp={this.stop} onTouchStart={() => this.move(0)} onTouchEnd={this.stop} >
                                <i className="material-icons">arrow_circle_up</i>
                            </button>
                        </td>
                        <td>
                            <button onMouseDown={() => this.move(45)} onMouseUp={this.stop} onTouchStart={() => this.move(45)} onTouchEnd={this.stop} >
                                <i className="material-icons">call_made</i>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onMouseDown={() => this.move(270)} onMouseUp={this.stop} onTouchStart={() => this.move(270)} onTouchEnd={this.stop}>
                                <i className="material-icons">arrow_back</i>
                            </button>
                        </td>
                        <td></td>
                        <td>
                            <button onMouseDown={() => this.move(90)} onMouseUp={this.stop} onTouchStart={() => this.move(90)} onTouchEnd={this.stop}>
                               <i className="material-icons">arrow_forward</i>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onMouseDown={() => this.move(225)} onMouseUp={this.stop} onTouchStart={() => this.move(225)} onTouchEnd={this.stop}>
                                <i className="material-icons">call_received</i>
                            </button>
                        </td>
                        <td>
                            <button onMouseDown={() => this.move(180)} onMouseUp={this.stop} onTouchStart={() => this.move(180)} onTouchEnd={this.stop}>
                               <i className="material-icons">arrow_circle_down</i>
                            </button>
                        </td>
                        <td>
                            <button onMouseDown={() => this.move(135)} onMouseUp={this.stop} onTouchStart={() => this.move(135)} onTouchEnd={this.stop}>
                                <i className="material-icons flippedIcon">call_received</i>
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

        )
    }
}

export default Controls;