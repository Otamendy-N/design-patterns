import { PrintableContainer } from "./interfaces";

export interface IStorage<T> {
    placeGoods(goods: T[]): void;
}

class Storage<T> implements IStorage<T>, PrintableContainer {
    private goods: Set<T> = new Set();
    constructor() {}
    listGoods(): void {
        console.table(this.goods);
    }
    placeGoods(goods: T[]): void {
        this.goods = new Set(goods);
    }
}

export class StorageGuardPost<T> implements IStorage<T> {
    private storage: Storage<T> | null = null;
    constructor() {}
    placeGoods(goods: T[]): void {
        if (this.storage === null) {
            this.storage = new Storage<T>();
        }
        this.storage.placeGoods(goods);
        console.log("[Info] Goods inserted in storage:");
        this.storage.listGoods();
    }
}
