import App from "../models/App";

const appList: App[] = new Array<App>();

export function addApp(appID: number, PID: number , deleteCallback: any) {
    appList.push(new App(appID, PID, deleteCallback));
}

export function getAppList() {
    return appList;
}

export function closeApp(PID: number) {
    const index = appList.findIndex((app) => app.PID === PID);
    if (index > -1) {
        appList[index].deleteCallback();
        appList.splice(index, 1);
    }
}
