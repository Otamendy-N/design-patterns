export class Addidas {
    color;
    size;
    constructor(size, color) {
        this.size = size;
        this.color = color;
    }
    use() {
        console.log("[Action] Procceds to run with her addidas on.");
    }
    printProperties() {
        let printText = `[Info] Addidas: \n\t - size: ${this.size} \n\t - color: ${this.color}`;
        console.log(printText);
    }
}
export class Nikes {
    color;
    size;
    constructor(size, color) {
        this.size = size;
        this.color = color;
    }
    use() {
        console.log("[Action] Procceds to run with her nikies on.");
    }
    printProperties() {
        let printText = `[Info] Nikes: \n\t - size: ${this.size} \n\t - color: ${this.color}`;
        console.log(printText);
    }
}
