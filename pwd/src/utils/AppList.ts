/*
 *  This module is a utilitary app list. It holds the global list of app and
    functions to access it, to open an app and to close and app
 */

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
        appList.splice(index, 1);
    }
}
