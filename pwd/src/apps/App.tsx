import React from "react";
import App from "../models/App";
import {closeApp} from "../utils/AppList";
import "./App.css";
import Draggable from "./Draggable";
import LiveChat from "./liveChat/LiveChat";

interface IProps {
    app: App;
    deleteCallback: any;
    zIndexSource: any;
}
export default class AppWindow extends React.Component<IProps> {
    public render() {
        switch (this.props.app.appID) {
            case 1:
                return (
                    <Draggable initialX={0} initialY={0} initialZ={this.props.zIndexSource()} zIndexSource={this.props.zIndexSource}>
                        <div className="w">
                            <div className="AppWindow">
                                <div className="TitleBar">
                                    <button onClick={() => this.close()} >X</button>
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
                    <Draggable initialX={0} initialY={0} initialZ={this.props.zIndexSource()} zIndexSource={this.props.zIndexSource}>
                        <div className="AppWindow">
                            <div className="TitleBar">
                                <button onClick={() => this.close()}>X</button>
                            </div>
                            <div className="Content">
                                App2
                            </div>
                        </div>
                    </Draggable>
                );
            case 3:
                return (
                    <Draggable initialX={0} initialY={0} initialZ={this.props.zIndexSource()} zIndexSource={this.props.zIndexSource}>
                        <div className="AppWindow">
                            <div className="TitleBar">
                                <button onClick={() => this.close()}>X</button>
                            </div>
                            <div className="Content">
                                App3
                            </div>
                        </div>
                    </Draggable>
                );
            case 4:
                return (
                    <Draggable initialX={0} initialY={0} initialZ={this.props.zIndexSource()} zIndexSource={this.props.zIndexSource}>
                        <div className="AppWindow">
                            <div className="TitleBar">
                                <button onClick={() => this.close()}>X</button>
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

    public close() {
        closeApp(this.props.app.PID);
        this.props.deleteCallback();
    }
}
