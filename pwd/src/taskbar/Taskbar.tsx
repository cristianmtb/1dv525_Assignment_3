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
                <button onClick={() => this.openApp(1)}>henlo fren</button>
            </div>
        );
    }
    private openApp(app: number) {
        addApp(app);
        this.props.openAppCallback();
    }
}
