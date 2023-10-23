import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderBall: false,
            posi : 0,
            ballPosition: { left: "0px" }
        };
        this.renderChoice = this.renderBallOrButton.bind(this)
        this.buttonClickHandler = this.buttonClickHandler.bind(this)
    };

    buttonClickHandler() {
      this.setState({
            renderBall: true,
        });
        this.interval = setInterval(() => {
            const newPos = this.state.posi + 5;
            this.setState({
                posi: newPos,
                ballPosition: { left: `${newPos}px` }
            });
        }, 16);
   }
    renderBallOrButton() {
		if (this.state.renderBall) {
		    return <div className="ball" style={this.state.ballPosition}></div>
		} else {
		    return <button onClick={this.buttonClickHandler} >Start</button>
		}
    }

    // bind ArrowRight keydown event
    componentDidMount() {
       document.addEventListener("keydown", (event) => {
            if (event.key === "ArrowRight" && this.state.renderBall) {
                const newPos = this.state.posi + 5;
                this.setState({
                    posi: newPos,
                    ballPosition: { left: `${newPos}px` }
                });
            }
        });
    }

    render() {
        return (
            <div className="playground">
                {this.renderBallOrButton()}
            </div>
        )
    }
}


export default App;
