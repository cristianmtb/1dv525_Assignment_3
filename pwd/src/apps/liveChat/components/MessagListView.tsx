import React from "react";
import Message from "../models/Message";
import MessageView from "./MessageView";
interface IProps {
    messageList: Message[];
}

export default class MessageListView extends React.Component<IProps> {

    public render() {
        let i = 0;
        return (
            <div className="message-list">
                {
                    this.props.messageList.map((item) => (
                        <MessageView
                            key={i++}
                            message={item}/>
                    ))
                }
            </div>
        );
    }
}
