import React from "react";
import App from "../models/App";
import { closeApp } from "../utils/AppList";
import Draggable from "../utils/Draggable";
import "./App.css";
import HttpPets from "./httpPets/HttpPets";
import LiveChat from "./liveChat/LiveChat";
import MemoryGame from "./memoryGame/MemoryGame";

interface IProps {
    app: App;
    deleteCallback: any;
    zIndexSource: any;
}
/**
 * This just renders the draggable and the applications, doesn't have any other functionality
 * The switch case bellow sometimes gets flagged with lint error: "==" instead "==="
 */
export default class AppWindow extends React.Component<IProps> {
    public render() {
        switch (this.props.app.appID) {
            case 1:
                return (
                    <Draggable
                        initialX={0}
                        initialY={0}
                        initialZ={this.props.zIndexSource()}
                        zIndexSource={this.props.zIndexSource}
                    >
                        <div className="w">
                            <div className="AppWindow">
                                <div className="TitleBar">
                                    <text className="title">Live Chat</text>
                                    <div className="closeDiv">
                                        <button className="closeBtn" onClick={() => this.close()}>
                                            <i className="fas fa-times"/></button>
                                    </div>
                                </div>
                                <div className="Content">
                                    <LiveChat />
                                </div>
                            </div>
                        </div>
                    </Draggable>
                );
            case 2:
                return (
                    <Draggable
                        initialX={0}
                        initialY={0}
                        initialZ={this.props.zIndexSource()}
                        zIndexSource={this.props.zIndexSource}
                    >
                        <div className="AppWindow">
                            <div className="TitleBar">
                                <div className="title">Memory Game</div>
                                <div className="closeDiv">
                                    <button className="closeBtn" onClick={() => this.close()}>
                                        <i className="fas fa-times"/></button>
                                </div>
                            </div>
                            <div className="Content">
                                <MemoryGame />
                            </div>
                        </div>
                    </Draggable>
                );
            case 3:
                return (
                    <Draggable
                        initialX={0}
                        initialY={0}
                        initialZ={this.props.zIndexSource()}
                        zIndexSource={this.props.zIndexSource}
                    >
                        <div className="AppWindow">
                            <div className="TitleBar">
                                <div className="title">HTTP Pets</div>
                                <div className="closeDiv">
                                    <button className="closeBtn" onClick={() => this.close()}>
                                        <i className="fas fa-times"/></button>
                                </div>
                            </div>
                            <div className="Content">
                                <HttpPets/>
                            </div>
                        </div>
                    </Draggable>
                );
            default:
                return (
                    <div>
                        App not found
                    </div>
                );
        }
    }

    public close() {
        closeApp(this.props.app.PID);
        this.props.deleteCallback();
    }
}
