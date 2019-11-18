import React from "react";
import { addApp } from "../utils/AppList";
import "./Taskbar.css";

interface IProps {
    openAppCallback: any;
}

/*
 *  This class renders the taskbar and opens apps. It adds them to the App list utility
    module (../utils/AppList.ts) after
    that it call the callback function offered by the desktop.
 */

export default class Taskbar extends React.Component<IProps> {

    public PID: number = 0;

    public render() {
        return(
            <div className="taskbar">
                <button className="appIcon" onClick={() => this.openApp(1)}>
                    <div>
                        <i className="fas fa-comment-alt"/><br/>
                        Live Chat
                    </div>
                </button>
                <button className="appIcon" onClick={() => this.openApp(2)}>
                    <div >
                        <i className="fas fa-chess-board"></i><br/>
                        Memory Game
                    </div></button>
                <button className="appIcon" onClick={() => this.openApp(3)}>
                    <div >
                        <i className="fas fa-paw"/><br/>
                        HTTP Pets
                    </div>
                </button>
            </div>
        );
    }
    private openApp(app: number) {
        addApp(app, this.PID++, this.props.openAppCallback);
        this.props.openAppCallback();
    }
}
