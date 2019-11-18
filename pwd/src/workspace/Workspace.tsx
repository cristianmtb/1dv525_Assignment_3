import React from "react";

import AppWindow from "../apps/App";
import App from "../models/App";
import { getAppList } from "../utils/AppList";
import "./Workspace.css";

interface IProps {
    appList: App[];

}

/**
 *  This component is responsible for rendering on AppWindow for each app instance
 *  open in the appList it receives as a prop from the desktop.
 *  When an app is closed the callback is called in order to rerender this component without the app
 *  Also here is where the z index originates from. In most modern browser the maximum z index is 2147483647 so
 *  it should not cause problems
 */
export default class Workspace extends React.Component<IProps> {

    public state = {
        appList : this.props.appList,
    };
    public zIndex = 1;

    public render() {
        return(
            <div className="workspace">
                {
                    this.state.appList.map((item) => (
                        <AppWindow
                            key={item.PID}
                            app={item}
                            deleteCallback={() => this.reload()}
                            zIndexSource={() => this.getZIndex()}
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
        if (this.state.appList.length === 0) { this.zIndex = 1; }
    }

    public getZIndex() {
        return ++this.zIndex;
    }
}
