import React from "react";
import Draggable from "react-draggable";
import App from "../models/App";
import {closeApp} from "../utils/AppList";
import LiveChat from "./liveChat/LiveChat";
import "./App.css";

interface IProps {
    app: App;
}
export default class AppWindow extends React.Component<IProps> {
    public render() {
        switch (this.props.app.appID) {
            case 1:
                return (
                    <Draggable bounds="parent" defaultPosition={{ x: 0, y: 0 }}>
                        <div className="w">
                            <div className="AppWindow">
                                <div className="TitleBar">
                                    <button onClick={() => closeApp(this.props.app.PID)} >Hell</button>
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
                    <Draggable bounds="parent" defaultPosition={{ x: 0, y: 0 }}>
                        <div className="AppWindow">
                            <div className="TitleBar">
                                <button onClick={() => closeApp(this.props.app.PID)}>Hell</button>
                                <button onClick={() => closeApp(this.props.app.PID)}>Hell</button>
                                <button onClick={() => closeApp(this.props.app.PID)}>Hell</button>
                            </div>
                            <div className="Content">
                                App2
                            </div>
                        </div>
                    </Draggable>
                );
            case 3:
                return (
                    <Draggable bounds="parent" defaultPosition={{ x: 0, y: 0 }}>
                        <div className="AppWindow">
                            <div className="TitleBar">  
                                <button onClick={() => closeApp(this.props.app.PID)}>Hell</button>
                            </div>
                            <div className="Content">
                                App3
                            </div>
                        </div>
                    </Draggable>
                );
            case 4:
                return (
                    <Draggable bounds="parent" defaultPosition={{ x: 0, y: 0 }}>
                        <div className="AppWindow">
                            <div className="TitleBar">
                                <button onClick={() => closeApp(this.props.app.PID)}>Hell</button>
                            </div>
                            <div className="Content">
                                App4
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
}
