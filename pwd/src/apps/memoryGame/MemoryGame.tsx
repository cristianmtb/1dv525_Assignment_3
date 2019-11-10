import React from "react";

export default class MemoryGame extends React.Component {
    state = {
        started:false,
        finished:false,
        numberOfSelections:0,
    }

    public render() {
        if(this.state.started === false) return this.startScreen();
        if(this.state.finished === true) return this.endScreen();
        if(this.state.started === true) return(<div>henlo start</div>);
    }

    private startScreen(){
        return(
            <div>
                Press the button to start 
                <button onClick={()=>this.startGame()}>
                    Start Game
                </button>
            </div>
        )
    }

    private endScreen(){
        return(
            <div>
                Your score is: {this.state.numberOfSelections}
            </div>
        )
    }

    private startGame(){
        this.setState({
            started:true, 
        })
    }
}