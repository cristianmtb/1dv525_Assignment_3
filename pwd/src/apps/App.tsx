import React from "react";
import LiveChat from "./liveChat/LiveChat";

interface IProps {
    appID: number;
}
export default class App extends React.Component<IProps> {
    public render() {
        switch (this.props.appID) {
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
