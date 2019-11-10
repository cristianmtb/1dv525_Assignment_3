import Message from "./models/Message";

export default class LiveChatLogic {
    public socket: WebSocket;
    public apiKey: string = "eDBE76deU7L0H9mEBgxUKVR0VCnq0XBd";
    public username: string;
    public receiveCallback: any;
    public messageList: Message[] = new Array<Message>();

    public constructor(receiveCallback: any) {
        this.socket = new WebSocket("ws://vhost3.lnu.se:20080/socket/");
        this.receiveCallback = receiveCallback;
        this.username = this.loadUserName();
        this.socket.addEventListener("message", (event) => this.receive(event));
        this.messageList.push(new Message("test", "test"));
    }

    public send(message: string) {
        const data = {
            channel: "",
            data: message,
            key: this.apiKey,
            type: "message",
            username: this.username,
        };
        this.socket.send(JSON.stringify(data));
    }

    public getUserName() {
        return this.username;
    }

    public setUserName(username: string) {
        this.saveUserName(username);
        this.username = this.loadUserName();
    }

    public getMessageList(): Message[] {
        return this.messageList;
    }

    private receive(event: any) {
        const message = JSON.parse(event.data);
        if (message.type === "message") {
            this.messageList.push(new Message(message.username, message.data));
            this.receiveCallback();
        }
    }

    private loadUserName() {
        const username = window.localStorage.getItem("username");
        if (username == null) { return ""; } else { return JSON.parse(username); }
    }

    private saveUserName(username: string) {
        window.localStorage.setItem("username", JSON.stringify(username));
    }
}
