export default class Message {
    public username: string;
    public body: string;
    public time: string;

    constructor(username: string, body: string) {
        this.username = username;
        this.body = body;
        const date = new Date();
        this.time = "At " + date.getHours() + ":" + date.getMinutes() + " on " + date.getUTCDate() + "." + date.getMonth() + "." + date.getFullYear();
    }
}
