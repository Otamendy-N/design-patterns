import { ICommand, Shoes } from "../interfaces";
import { Package } from "./package";

export class CloseShoesPackCommand implements ICommand {
    private pack: Package<Shoes>
    constructor(pack: Package<Shoes>) {
        this.pack = pack
    }
    excecute() {
        console.log("[Action] Saving shoes in package.")
        console.table(this.pack.open())
    }
    undo(): void {
        console.log("[Action] Opening shoes package.")
        console.table(this.pack.open())
    }

}
export class OpenShoesPackCommand implements ICommand {
    private pack: Package<Shoes>
    constructor(pack: Package<Shoes>) {
        this.pack = pack
    }
    excecute(): Set<Shoes> {
        console.log("[Action] Opening shoes package.")
        console.table(this.pack.open())
        return this.pack.open();
    }
    undo(): void {
        console.log("[Action] Saving shoes in package.")
        console.table(this.pack.open())
        return;
    }
}

export class RemoteControl {
    private commands: ICommand[] = []
    addCommand(command: ICommand): void {
        this.commands.push(command)
    }
    excecuteCommands(): void {
        for (const c of this.commands) {
            c.excecute()
        }
    }
    undoCommands(): void {
        for (const c of this.commands) {
            c.undo()
        }
    }
}