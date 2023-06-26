import { Package } from "./entities/package";
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

export interface ISubscriber {
  getIdentifier(): string;
  getNotification(msg: string): void
}

export interface IStrategy {
  excecute(data: string): void
}

export interface ICommand {
  excecute(): any
  undo(): void
}

export interface Iterator<T> {
  hasNext(): boolean
  next(): T
}

export interface IMediator {
  sendMessage(message: string, sender: IColleague): void;
  registerColleague(colleague: IColleague): void;
  unregisterColleague(colleague: IColleague): void;
}

export interface IColleague {
  setMediator(mediator: IMediator): void;
  getIdentifier(): string;
  send(message: string): void;
  receive(message: string, colleague: IColleague): void;
}