import React from "react";
import App from "../models/App";
import LiveChat from "./liveChat/LiveChat";

interface IProps {
    app: App;
}
export default class AppWindow extends React.Component<IProps> {
    public render() {
        switch (this.props.app.appID) {
            case 1:
                return(
                    <LiveChat/>
                );
            default:
                return(
                    <div>
                        App not found
                    </div>
                );
        }
    }

}
