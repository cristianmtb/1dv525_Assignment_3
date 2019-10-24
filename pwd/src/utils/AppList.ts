
const appList: number[] = new Array<number>();

export function addApp(appID: number) {

    appList.push(appID);
}

export function getAppList() {
    return appList;
}
