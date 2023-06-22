import { Package } from "./package";
import { color } from "./types";

// this is for impementing the composite pattern used to print stuff
export interface PrintableContainer {
  listGoods(): void
}
// this is an adapter interfaces for getting cargo into trains
export interface Station<Product> {
  getPackedGoods(): Package<Product>[];
  getStationName(): string;
}

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
