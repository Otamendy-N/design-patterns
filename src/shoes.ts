import { Shoes } from "./interfaces";
import { color } from "./types";


export class Addidas implements Shoes {
  private color: color;
  private size: number;

  constructor(size: number, color: color) {
    this.size = size;
    this.color = color;
  }

  use(): void {
    console.log("[Action] Procceds to run with her addidas on.");
  }

  printProperties() {
    let printText = `[Info] Addidas: \n\t - size: ${this.size} \n\t - color: ${this.color}`;
    console.log(printText);
  }
}
export class Nikes implements Shoes {
  private color: color;
  private size: number;

  constructor(size: number, color: color) {
    this.size = size;
    this.color = color;
  }

  use(): void {
    console.log("[Action] Procceds to run with her nikies on.");
  }

  printProperties() {
    let printText = `[Info] Nikes: \n\t - size: ${this.size} \n\t - color: ${this.color}`;
    console.log(printText);
  }
}