import { Assambly } from "./package";
import { Addidas, Nikes } from "./shoes";
// these are implementations of a Abstract shoes Factory that implements
// also the Singleton pattern to make only one instance of each in the
// entire application.
export class AddidasFactory {
    static factory = null;
    location;
    assambly = null;
    constructor(defaultLocation) {
        this.location = defaultLocation;
    }
    static getFactory(defaultLocation = "Panama") {
        if (this.factory === null) {
            this.factory = new AddidasFactory(defaultLocation);
        }
        return this.factory;
    }
    createShoesPackage(ammount) {
        if (this.assambly === null) {
            this.assambly = new Assambly();
        }
        let items = [];
        for (let i = 0; i < ammount; i++) {
            let color = i % 3 === 0 ? "red" : i % 3 === 2 ? "white" : "black";
            let size = 38 + (i % 6);
            items[i] = {
                size,
                color: color,
            };
        }
        return this.assambly.packItems(items, "plastic");
    }
    createShoesPair(size, color) {
        let shoes = new Addidas(size, color);
        return shoes;
    }
    printLocation() {
        console.log("[Info] Addidas Factory at " + this.location);
    }
    changeLocation(newLocation) {
        this.location = newLocation;
    }
}
export class NikesFactory {
    static factory = null;
    location;
    assambly = null;
    shoesCache = {};
    constructor(defaultLocation) {
        this.location = defaultLocation;
    }
    static getFactory(defaultLocation = "Panama") {
        if (this.factory === null) {
            this.factory = new NikesFactory(defaultLocation);
        }
        return this.factory;
    }
    createShoesPair(size, color) {
        let shoes = new Nikes(size, color);
        return shoes;
    }
    createShoesPackage(ammount) {
        if (this.assambly === null) {
            this.assambly = new Assambly();
        }
        let items = [];
        for (let i = 0; i < ammount; i++) {
            let color = i % 3 === 0 ? "red" : i % 3 === 2 ? "white" : "black";
            let size = 38 + (i % 6);
            let key = `${color}-${size}`;
            if (!this.shoesCache[key]) {
                let item = {
                    size,
                    color: color,
                };
                this.shoesCache[key] = item;
            }
            items[i] = this.shoesCache[key];
        }
        return this.assambly.packItems(items, "plastic");
    }
    printLocation() {
        console.log("[Info] Nikes Factory at " + this.location);
    }
    changeLocation(newLocation) {
        this.location = newLocation;
    }
}
