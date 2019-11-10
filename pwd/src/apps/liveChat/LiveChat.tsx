import React from "react";
import UsernameForm from "./components/UsernameForm";
import "./LiveChat.css";
import LiveChatLogic from "./LiveChatLogic";
import MessageSend from "./components/MessageSend";
import MessageListView from "./components/MessagListView";

export default class LiveChat extends React.Component {

    public chat = new LiveChatLogic(() => this.receiveMessage());

    public state = {
        username: this.chat.getUserName(),
        messageList: this.chat.getMessageList(),
    };

    constructor(props: any) {
        super(props);
        this.setUserName = this.setUserName.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    public render() {
        if (this.state.username === "") { 
            return <UsernameForm setUsernameCallback={this.setUserName} />; 
        } else {
            return (
                <div>
                    <MessageListView messageList={this.state.messageList}></MessageListView>
                    <MessageSend sendCallback={this.sendMessage}></MessageSend>
                </div>
            );
        }
    }

    public receiveMessage() {
       this.setState({
           messageList: this.chat.getMessageList(),
       });
    }

    public sendMessage(message: string) {
        this.chat.send(message);
    }

    private getUserName() {
        this.setState({
            username: this.chat.getUserName(),
        });
    }

    private setUserName(username: string) {
        this.chat.setUserName(username);
        this.getUserName();
    }

}
