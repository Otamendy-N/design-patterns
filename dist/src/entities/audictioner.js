export class Audictioner {
    colleagues = [];
    constructor() { }
    sendMessage(message, sender) {
        for (const c of this.colleagues) {
            if (c.getIdentifier() === sender.getIdentifier())
                continue;
            c.receive(message, sender);
        }
    }
    registerColleague(colleague) {
        this.colleagues.push(colleague);
        colleague.setMediator(this);
    }
    unregisterColleague(colleague) {
        const lamda = (c) => c.getIdentifier() === colleague.getIdentifier();
        const index = this.colleagues.findIndex(lamda);
        if (index !== -1)
            this.colleagues.splice(index, 1);
    }
}
