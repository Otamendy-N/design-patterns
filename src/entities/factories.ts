import { ShoesFactory } from "../interfaces";
import { Assambly, Package } from "./package";
import { Addidas, Nikes } from "./shoes";
import { color } from "../types";

// these are implementations of a Abstract shoes Factory that implements
// also the Singleton pattern to make only one instance of each in the
// entire application.
export class AddidasFactory implements ShoesFactory<Addidas> {
    private static factory: AddidasFactory | null = null;
    private location: string;
    private assambly: Assambly<Addidas> | null = null;
    private constructor(defaultLocation: string) {
        this.location = defaultLocation;
    }
    static getFactory(defaultLocation: string = "Panama"): AddidasFactory {
        if (this.factory === null) {
            this.factory = new AddidasFactory(defaultLocation);
        }
        return this.factory;
    }
    createShoesPackage(ammount: number): Package<Addidas> {
        if (this.assambly === null) {
            this.assambly = new Assambly<Addidas>();
        }
        let items: Addidas[] = [];
        for (let i = 0; i < ammount; i++) {
            let color = i % 3 === 0 ? "red" : i % 3 === 2 ? "white" : "black";
            let size = 38 + (i % 6);
            items[i] = {
                size,
                color: color as color,
            } as unknown as Addidas;
        }
        return this.assambly.packItems(items, "plastic");
    }
    createShoesPair(size: number, color: color): Addidas {
        let shoes = new Addidas(size, color);
        return shoes;
    }
    printLocation(): void {
        console.log("[Info] Addidas Factory at " + this.location);
    }
    changeLocation(newLocation: string): void {
        this.location = newLocation;
    }
}

export class NikesFactory implements ShoesFactory<Nikes> {
    private static factory: NikesFactory | null = null;
    private location: string;
    private assambly: Assambly<Nikes> | null = null;
    private shoesCache: { [key: string]: Nikes } = {};
    private constructor(defaultLocation: string) {
        this.location = defaultLocation;
    }
    static getFactory(defaultLocation: string = "Panama"): NikesFactory {
        if (this.factory === null) {
            this.factory = new NikesFactory(defaultLocation);
        }
        return this.factory;
    }
    createShoesPair(size: number, color: color): Nikes {
        let shoes = new Nikes(size, color);
        return shoes;
    }
    createShoesPackage(ammount: number): Package<Nikes> {
        if (this.assambly === null) {
            this.assambly = new Assambly<Nikes>();
        }
        let items: Nikes[] = [];
        for (let i = 0; i < ammount; i++) {
            let color = i % 3 === 0 ? "red" : i % 3 === 2 ? "white" : "black";
            let size = 38 + (i % 6);
            let key = `${color}-${size}`;
            if (!this.shoesCache[key]) {
                let item = {
                    size,
                    color: color as color,
                } as unknown as Nikes;
                this.shoesCache[key] = item;
            }
            items[i] = this.shoesCache[key];
        }
        return this.assambly.packItems(items, "plastic");
    }
    printLocation(): void {
        console.log("[Info] Nikes Factory at " + this.location);
    }
    changeLocation(newLocation: string): void {
        this.location = newLocation;
    }
}
