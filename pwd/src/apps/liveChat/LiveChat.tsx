import React from "react";
import "./LiveChat.css";

export default class LiveChat extends React.Component {

    ws = new WebSocket("ws://vhost3.lnu.se:20080/socket/");
    apiKey = "eDBE76deU7L0H9mEBgxUKVR0VCnq0XBd";

    state = {
        username:this.getUserName(),

    }

    public render() {
        if(this.state.username === "") return this.setUserName()
        return(
            <div>
                Live Chat
            </div>
        )
    }

    private getUserName():String{
        return "";
    }
    private setUserName(){
        return(
            <div>
                setusername
            </div>
        )
    }

}
