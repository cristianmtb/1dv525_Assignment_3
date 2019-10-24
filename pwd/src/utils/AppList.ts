import App from "../models/App";

const appList: App[] = new Array<App>();

export function addApp(appID: number) {

    appList.push(new App(appID));
}

export function getAppList() {
    return appList;
}
