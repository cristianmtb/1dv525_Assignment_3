import React from "react";

import "./Workspace.css";
import { getAppList } from "../utils/AppList";
import App from "../apps/App";

interface IProps {
    appList: number[];
}

export default class Workspace extends React.Component<IProps> {

    constructor(props: IProps) {
        super(props);
    }
    public render() {
        return(
            <div className="workspace">
                {
                    this.props.appList.map((item)=>(
                        <App appID={item}>
                        </App>
                    ))
                }
            </div>
        );
    }
}
