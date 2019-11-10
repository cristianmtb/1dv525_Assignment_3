import React from "react";
import { addApp } from "../utils/AppList";
import "./Taskbar.css";

interface IProps {
    openAppCallback: any;
}

export default class Taskbar extends React.Component<IProps> {

    public PID: number = 0;

    public render() {
        return(
            <div className="taskbar">
                <button onClick={() => this.openApp(1)}><i className="fa fa-comments"/></button>
                <button onClick={() => this.openApp(2)}>Mem</button>
                <button onClick={() => this.openApp(3)}>Cats</button>
            </div>
        );
    }
    private openApp(app: number) {
        addApp(app, this.PID++, this.props.openAppCallback);
        this.props.openAppCallback();
    }
}
