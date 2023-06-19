import { Package } from "./package";
import { color } from "./types";

// this is a Abstract shoes Factory
export interface ShoesFactory<T> {
  // tecnically this will be our 'Factory Method' of the FactoryMethod pattern
  createShoesPair(size: number, color: color): T;
  createShoesPackage(ammount: number): Package<T>;
  printLocation(): void;
  changeLocation(newLocation: string): void;
}

export interface Shoes {
  use(): void;
  printProperties(): void;
}