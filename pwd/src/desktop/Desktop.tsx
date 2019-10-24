import React from "react";
import Taskbar from "../taskbar/Taskbar";
import Workspace from "../workspace/Workspace";
import "./Desktop.css";

export default class Desktop extends React.Component {

    public render() {
        return(
            <div className="desktop">
                <Workspace/>
                <Taskbar></Taskbar>
            </div>
        );
    }
}
