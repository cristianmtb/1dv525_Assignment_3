import React from "react";
import Brick from "./components/Brick";
import "./MemoryGame.css"

export default class MemoryGame extends React.Component {

    previousBrick: any;
    brickArray: number[] = new Array<number>();
    numberOfPairs: number = 0;
    numberOfCorrectPairs: number = 0;
    timesclicked = 0;

    public state = {
        started: false,
        finished: false,
        tilesPerRow: 2,
        maxCorrectPairs:0,
    };

    constructor(props: any) {
        super(props)
        this.brickClick = this.brickClick.bind(this);
    }

    public render() {
        if (this.state.started === false) { return this.startScreen(); }
        if (this.state.finished === true) { return this.endScreen(); }
        return this.playGame();
    }

    private startScreen() {
        return (
            <div className="start-screen">
                Press the button to start
                <button onClick={() => this.startGame(2, 2)}>
                    Start Game 2x2
                </button>
                <button onClick={() => this.startGame(2, 4)}>
                    Start Game 2x4
                </button>
                <button onClick={() => this.startGame(4, 4)}>
                    Start Game 4x4
                </button>
            </div>
        );
    }

    private playGame() {
        return (
            <div className="game-board" >
                {
                    this.brickArray.map((item, index) => (
                        <Brick key={index} image={item} tilesPerRow={this.state.tilesPerRow} clickCallback={this.brickClick} />
                    ))
                }
                <div>
                <button onClick={()=>this.restart()}>restart</button>
                </div>
            </div>
        );
    }

    private brickClick(successStateCallback: any, number: number) {
        this.timesclicked ++;
        if(this.timesclicked > 2) successStateCallback(false);
        if (this.previousBrick == null) {
            this.previousBrick = {
                callBack: successStateCallback,
                number: number,
            }
        } else {
            setTimeout(() => this.compare(successStateCallback, number), 1000);
        }

    }

    private compare(successStateCallback: any, number: number) {
        this.numberOfPairs++;
        if (this.previousBrick.number === number) {
            this.numberOfCorrectPairs++;
            this.previousBrick.callBack(true);
            successStateCallback(true);
            if (this.numberOfCorrectPairs === this.state.maxCorrectPairs) {
                this.setState({
                    finished: true,
                })
            }
        } else {
            this.previousBrick.callBack(false);
            successStateCallback(false);
        }
        this.timesclicked = 0;
        this.previousBrick = null; 
    }

    private startGame(nrOfRows:number, tilesPerRow: number) {
        let i = 1;
        for (i; i <= tilesPerRow * nrOfRows /2; i++) {
            let num = Math.floor(Math.random() * Math.floor(8)) + 1
            this.brickArray.push(num);
            this.brickArray.push(num);
        }
        this.shuffle();
        this.setState({
            finished:false,
            started: true,
            maxCorrectPairs:tilesPerRow * nrOfRows /2,
            tilesPerRow: tilesPerRow
        });
    }

    private endScreen() {
        return (
            <div>
                <h1>You Won!</h1>
                Number of pair you selected: {this.numberOfPairs}.
                <div>
                    <button onClick={()=>this.restart()}>restart</button>
                </div>
            </div>
        );
    }

    private restart() {
        this.brickArray = new Array<number>();
        this.setState({
            finished:false,
            started: false,
        })
    }

    private shuffle() {
        for (let i = this.brickArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.brickArray[i], this.brickArray[j]] = [this.brickArray[j], this.brickArray[i]];
        }
    }

}
