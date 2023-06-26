import { IColleague, IMediator } from "../interfaces";

export class Audictioner implements IMediator {
    private colleagues: IColleague[] = [];
    constructor() {}
    sendMessage(message: string, sender: IColleague): void {
        for (const c of this.colleagues) {
            if (c.getIdentifier() === sender.getIdentifier()) continue;
            c.receive(message, sender);
        }
    }
    registerColleague(colleague: IColleague): void {
        this.colleagues.push(colleague);
        colleague.setMediator(this);
    }
    unregisterColleague(colleague: IColleague): void {
        const lamda = (c: IColleague) =>
            c.getIdentifier() === colleague.getIdentifier();
        const index = this.colleagues.findIndex(lamda);
        if (index !== -1) 
            this.colleagues.splice(index, 1); 
    }
}
