export class Client {
    name;
    mediator = null;
    constructor(name) {
        this.name = name;
    }
    setMediator(mediator) {
        this.mediator = mediator;
    }
    getIdentifier() {
        return this.name;
    }
    send(message) {
        if (this.mediator !== null) {
            this.mediator.sendMessage(message, this);
            return;
        }
        let warnign = `[Warning:${this.name}] Message can not be send without a mediator.`;
        console.warn(warnign);
    }
    receive(message, colleague) {
        let event = `[Event:${this.name}] Mensaje desde ${colleague.getIdentifier()}: \n\t - ${message}`;
        console.log(event);
    }
    getNotification(msg) {
        console.log("[Notification] Que tal " + this.name + " " + msg);
    }
}
