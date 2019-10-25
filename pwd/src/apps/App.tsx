import React from "react";
import App from "../models/App";
import LiveChat from "./liveChat/LiveChat";
import Draggable from "react-draggable";

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
                                    <button>Hell</button>
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
                                <button>Hell</button>
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
                                <button>Hell</button>
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
                                <button>Hell</button>
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
