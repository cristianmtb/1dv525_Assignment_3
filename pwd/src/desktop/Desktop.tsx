import React from "react";
import Taskbar from "../taskbar/Taskbar";
import { getAppList } from "../utils/AppList";
import Workspace from "../workspace/Workspace";
import "./Desktop.css";

/*
 * This component renders the Workspace (the one who "owns" the app instances) and the Taskbar
   (where the app icons are).
 * It also offers the app list to the Workspace and forms a bridge between the Workspace and the Taskbar
 */

export default class Desktop extends React.Component {
    public state = {
        appList: getAppList(),
    };

    constructor(props: any) {
        super(props);
        this.reload = this.reload.bind(this);
    }

    public render() {
        return(

            <div className="desktop">
                <Workspace appList={this.state.appList}/>
                <Taskbar openAppCallback={() => this.reload()}/>
            </div>
        );
    }

    public reload() {
       this.setState({
           appList: getAppList(),
       });
    }
}
