import { ShoesFactory } from "./interfaces";
import { Assambly, Package } from "./package";
import { Addidas, Nikes } from "./shoes";
import { color } from "./types";

// these are implementations of a Abstract shoes Factory that implements
// also the Singleton pattern to make only one instance of each in the
// entire application.
export class AddidasFactory implements ShoesFactory<Addidas> {
  private static factory: AddidasFactory | null = null;
  private location: string;
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
    let assambly = new Assambly<Addidas>();
    let items = [];
    for (let i = 0; i < ammount; i++) {
      let color = i % 3 === 0 ? "red" : i % 3 === 2 ? "white" : "black";
      let size = 38 + (i % 6);
      items.push(this.createShoesPair(size, color as color));
    }
    return assambly.packItems(items, "plastic");
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
    let assambly = new Assambly<Nikes>();
    let items = [];
    for (let i = 0; i < ammount; i++) {
      let color = i % 5 === 0 ? "red" : i % 5 === 2 ? "white" : "black";
      let size = 37 + (i % 4);
      items.push(this.createShoesPair(size, color as color));
    }
    return assambly.packItems(items, "plastic");
  }
  printLocation(): void {
    console.log("[Info] Nikes Factory at " + this.location);
  }
  changeLocation(newLocation: string): void {
    this.location = newLocation;
  }
}
