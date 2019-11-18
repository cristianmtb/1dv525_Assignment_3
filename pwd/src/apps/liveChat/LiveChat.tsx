import React from "react";
import MessageSend from "./components/MessageSend";
import MessageListView from "./components/MessagListView";
import UsernameForm from "./components/UsernameForm";
import "./LiveChat.css";
import LiveChatLogic from "./LiveChatLogic";

export default class LiveChat extends React.Component {

    public chat = new LiveChatLogic(() => this.receiveMessage());

    public state = {
        messageList: this.chat.getMessageList(),
        username: this.chat.getUserName(),
    };

    constructor(props: any) {
        super(props);
        this.setUserName = this.setUserName.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.cleanChat = this.cleanChat.bind(this);
    }

    public render() {
        if (this.state.username === "") {
            return <UsernameForm setUsernameCallback={this.setUserName} />;
        } else {
            return (
                <div>
                    <MessageListView messageList={this.state.messageList}></MessageListView>
                    <MessageSend sendCallback={this.sendMessage} deleteMessages={this.cleanChat}/>
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

    private cleanChat() {
        this.chat.cleanChat();
        this.setState ({
            messageList: this.chat.getMessageList(),
        });
    }

}
