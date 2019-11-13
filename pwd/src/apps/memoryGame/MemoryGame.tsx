import React from "react";
import Brick from "./components/Brick";
import "./MemoryGame.css";

export default class MemoryGame extends React.Component {

    public previousBrick: any;
    public brickArray: number[] = new Array<number>();
    public numberOfPairs: number = 0;
    public numberOfCorrectPairs: number = 0;
    public timesclicked = 0;

    public state = {
        finished: false,
        maxCorrectPairs: 0,
        started: false,
        tilesPerRow: 2,
    };

    constructor(props: any) {
        super(props);
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
                <p>
                    Memory, also known as Concentration is a card game in which all of the cards are laid face 
                    down on a surface and two cards are flipped face up over each turn. The object of the game 
                    is to turn over pairs of matching cards
                </p>
                <p>
                    To start playing select a board size:
                </p>
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
                        <Brick
                            key={index}
                            image={item}
                            tilesPerRow={this.state.tilesPerRow}
                            clickCallback={this.brickClick} />
                    ))
                }
                <div>
                    <button onClick={() => this.restartGame()}>restart</button>
                </div>
            </div>
        );
    }

    private brickClick(successStateCallback: any, brickNumber: number) {
        this.timesclicked++;
        if (this.timesclicked > 2) { successStateCallback(false); }
        if (this.previousBrick == null) {
            this.previousBrick = {
                callBack: successStateCallback,
                number: brickNumber,
            };
        } else {
            setTimeout(() => this.checkPair(successStateCallback, brickNumber), 1000);
        }
    }

    private checkPair(successStateCallback: any, brickNumber: number) {
        this.numberOfPairs++;
        if (this.previousBrick.number === brickNumber) {
            this.numberOfCorrectPairs++;
            this.previousBrick.callBack(true);
            successStateCallback(true);
            if (this.numberOfCorrectPairs === this.state.maxCorrectPairs) {
                this.setState({
                    finished: true,
                });
            }
        } else {
            this.previousBrick.callBack(false);
            successStateCallback(false);
        }
        this.timesclicked = 0;
        this.previousBrick = null;
    }

    private startGame(nrOfRows: number, tilesPerRow: number) {
        let i = 1;
        for (i; i <= tilesPerRow * nrOfRows / 2; i++) {
            const num = Math.floor(Math.random() * Math.floor(8)) + 1;
            this.brickArray.push(num);
            this.brickArray.push(num);
        }
        this.shuffle();
        this.numberOfCorrectPairs = 0;
        this.numberOfPairs = 0;
        this.setState({
            finished: false,
            maxCorrectPairs: tilesPerRow * nrOfRows / 2,
            started: true,
            tilesPerRow,
        });
    }

    private endScreen() {
        return (
            <div>
                <h1>You Won!</h1>
                Number of pair you selected: {this.numberOfPairs}.
                <div>
                    <button onClick={() => this.restartGame()}>restart</button>
                </div>
            </div>
        );
    }

    private restartGame() {
        this.brickArray = new Array<number>();
        this.numberOfCorrectPairs = 0;
        this.numberOfPairs = 0;
        this.setState({
            finished: false,
            started: false,
        });
    }

    private shuffle() {
        for (let i = this.brickArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.brickArray[i], this.brickArray[j]] = [this.brickArray[j], this.brickArray[i]];
        }
    }

}
