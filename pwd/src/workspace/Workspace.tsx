import React from "react";

import AppWindow from "../apps/App";
import App from "../models/App";
import { getAppList } from "../utils/AppList";
import "./Workspace.css";

interface IProps {
    appList: App[];
    
}

export default class Workspace extends React.Component<IProps> {

    public state = {
        appList : this.props.appList,
    };

    public render() {
        return(
            <div className="workspace">
                {
                    this.state.appList.map((item) => (
                        <AppWindow
                            key={item.PID} 
                            app={item} 
                            deleteCallback={() => this.reload()}
                            />
                    ))
                }
            </div>
        );
    }

    public reload() {
        this.setState({
            appList: getAppList(),
        });
    }

}
