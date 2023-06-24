import { ISubscriber } from "../interfaces";

export class Client implements ISubscriber {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }
    getNotification(msg: string): void {
        console.log("[Notification] Que tal " + this.name + " " + msg);
    }
}
