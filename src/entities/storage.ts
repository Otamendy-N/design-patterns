import { PrintableContainer } from "../interfaces";
import { Truck } from "./truck";

export interface IStorage<T> {
    placeGoods(goods: T[]): void;
}

class Storage<T> implements IStorage<T>, PrintableContainer {
    private goods: Set<T> = new Set();
    constructor() {}
    takeAllGoods(): any {
        let goods = this.goods;
        this.goods = new Set()
        return goods
    }
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
    giveGoodsTo(truck: Truck<T>) {
        if (this.storage === null) {
            console.log("[Info] Storage has no goods in it.");
            return;
        }
        let shipment = this.storage.takeAllGoods()
        truck.loadShipment([...shipment]);
    }
    placeGoods(goods: T[]): void {
        if (this.storage === null) {
            this.storage = new Storage<T>();
        }
        this.storage.placeGoods(goods);
        console.log("[Info] Goods inserted in storage:");
        this.storage.listGoods();
    }
}
