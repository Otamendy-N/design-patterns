import { Package } from "./package";
import { Shop } from "./shop";

export class Truck<T> {
    private goods: T[] = []
    constructor(){}

    deliverCargoToShop(shoesShop: Shop<T>): void {
        if (this.goods.length === 0) return;
        shoesShop.saveGoods(this.goods)
        this.goods = []
    }
    loadShipment(shipment: T[]) {
        this.goods = shipment;
    }
}