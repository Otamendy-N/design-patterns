export class CloseShoesPackCommand {
    pack;
    constructor(pack) {
        this.pack = pack;
    }
    excecute() {
        console.log("[Action] Saving shoes in package.");
        console.table(this.pack.open());
    }
    undo() {
        console.log("[Action] Opening shoes package.");
        console.table(this.pack.open());
    }
}
export class OpenShoesPackCommand {
    pack;
    constructor(pack) {
        this.pack = pack;
    }
    excecute() {
        console.log("[Action] Opening shoes package.");
        console.table(this.pack.open());
        return this.pack.open();
    }
    undo() {
        console.log("[Action] Saving shoes in package.");
        console.table(this.pack.open());
        return;
    }
}
export class RemoteControl {
    commands = [];
    addCommand(command) {
        this.commands.push(command);
    }
    excecuteCommands() {
        for (const c of this.commands) {
            c.excecute();
        }
    }
    undoCommands() {
        for (const c of this.commands) {
            c.undo();
        }
    }
}
