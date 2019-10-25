import React from "react";
import Taskbar from "../taskbar/Taskbar";
import { getAppList } from "../utils/AppList";
import Workspace from "../workspace/Workspace";
import "./Desktop.css";

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
                <Taskbar openAppCallback={this.reload}/>
            </div>
        );
    }

    public reload() {
       console.log("henlo");
       this.setState({
           appList: getAppList(),
       });
    }
}
