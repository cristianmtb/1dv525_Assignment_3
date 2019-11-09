import React from "react";

import AppWindow from "../apps/App";
import App from "../models/App";
import "./Workspace.css";

interface IProps {
    appList: App[];
}

export default class Workspace extends React.Component<IProps> {
    public render() {
        return(
            <div className="workspace">
                {
                    this.props.appList.map((item) => (
                        <AppWindow app={item}/>
                    ))
                }
            </div>
        );
    }
}
