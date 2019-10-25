export default class App {
    public x: number;
    public y: number;
    public z: number;
    public appID: number;
    public PID: number;
    public deleteCallback: any;

    constructor(appID: number, PID: number, deleteCallback: any) {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.appID = appID;
        this.deleteCallback = deleteCallback;
        this.PID = PID;
    }
}
