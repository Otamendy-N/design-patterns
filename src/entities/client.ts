import { IColleague, IMediator, ISubscriber } from "../interfaces";

export class Client implements ISubscriber, IColleague {
    private name: string;
    private mediator: IMediator | null = null;
    constructor(name: string) {
        this.name = name;
    }
    setMediator(mediator: IMediator): void {
        this.mediator = mediator;
    }
    getIdentifier(): string {
        return this.name;
    }
    send(message: string): void {
        if (this.mediator !== null) {
            this.mediator.sendMessage(message, this);
            return;
        }
        let warnign = `[Warning:${this.name}] Message can not be send without a mediator.`;
        console.warn(warnign);
    }
    receive(message: string, colleague: IColleague): void {
        let event = `[Event:${
            this.name
        }] Mensaje desde ${colleague.getIdentifier()}: \n\t - ${message}`;
        console.log(event);
    }
    getNotification(msg: string): void {
        console.log("[Notification] Que tal " + this.name + " " + msg);
    }
}
