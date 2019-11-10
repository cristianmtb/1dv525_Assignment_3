export default class Message {
    public username: String;
    public body: String;
    public time: String;

    constructor(username: String, body: String) {
        this.username = username;
        this.body = body;
        const date = new Date();
        this.time = "At " + date.getHours() + ":" + date.getMinutes() + " on " + date.getUTCDate() + "." + date.getMonth() + "." + date.getFullYear();
    }
}
