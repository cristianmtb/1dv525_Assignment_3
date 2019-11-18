export default class Message {
    public username: string;
    public body: string;
    public time: string;

    constructor(username: string, body: string) {
        this.username = username;
        this.body = body;
        const date = new Date();
        // This line gives a lint error because it's too long, but I don't find it relevant to shorten
        this.time = date.getHours() + ":" + date.getMinutes() + " on " + date.getUTCDate() + "." + date.getMonth() + "." + date.getFullYear();
    }
}
