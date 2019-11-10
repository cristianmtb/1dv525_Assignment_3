import React from "react";
import Message from "../models/Message";

interface IProps {
    message: Message;
}

export default class MessageView extends React.Component<IProps> {

    public render() {
        return (
            <div className="message">
                <div className="message-from">from {this.props.message.username} at {this.props.message.time}</div>
                <div className="message-body">{this.props.message.body}</div>
            </div>
        );
    }
}
