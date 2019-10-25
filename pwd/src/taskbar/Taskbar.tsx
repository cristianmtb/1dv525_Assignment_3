import React from "react";
import { addApp } from "../utils/AppList";
import "./Taskbar.css";

interface IProps {
    openAppCallback: any;
}

export default class Taskbar extends React.Component<IProps> {

    public render() {
        return(
            <div className="taskbar">
                <button className="start-button">Start</button>
                <button onClick={() => this.openApp(1)}>henlo fren</button>
                <button onClick={() => this.openApp(2)}>henlo fren</button>
                <button onClick={() => this.openApp(3)}>henlo fren</button>
                <button onClick={() => this.openApp(4)}>henlo fren</button>
            </div>
        );
    }
    private openApp(app: number) {
        addApp(app);
        this.props.openAppCallback();
    }
}
