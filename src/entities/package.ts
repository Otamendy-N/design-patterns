import { PrintableContainer } from "../interfaces";
import { wrapper } from "../types";

// this will be my implementation of a builder pattern
export class Package<T> implements PrintableContainer {
  private hasValidWrapper = false;
  private wrapper: wrapper = "none";
  private itemsAmount: number = 0;
  private setOfItems: Set<T> = new Set();
  private isSigned = false;

  listGoods(): void {
    console.log('[Info] Package goods: ');
    console.table(this.open());
  }

  open(): Set<T> {
    return this.setOfItems;
  }

  insertItems(items: T[]): this {
    this.itemsAmount = items.length;
    this.setOfItems = items as unknown as Set<T>
    return this;
  }

  wrap(wrapper: wrapper): this {
    this.wrapper = wrapper;
    this.hasValidWrapper = wrapper === "plastic";
    return this;
  }

  sign(): this {
    if (!this.hasValidWrapper) {
      let errorMessage =
        "[Error] Package can not be sign: \n\t - invalid wrapper: " +
        this.wrapper;
      throw new Error(errorMessage);
    }
    this.isSigned = true;
    return this;
  }

  isValid() {
    if (!this.hasValidWrapper) return false;
    if (!this.isSigned) return false;
    return true;
  }
}

// this will be a "director" class for building my products
export class Assambly<T> {
  // constructor(){
  // }

  packItems(items: T[], wrapper: wrapper = "none"): Package<T> {
    let pack = new Package<T>();
    pack.insertItems(items).wrap(wrapper).sign();
    return pack;
  }
}
