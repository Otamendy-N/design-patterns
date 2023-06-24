export class Client {
    name;
    constructor(name) {
        this.name = name;
    }
    getNotification(msg) {
        console.log("[Notification] Que tal " + this.name + " " + msg);
    }
}
