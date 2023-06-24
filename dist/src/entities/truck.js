export class Truck {
    goods = [];
    constructor() { }
    deliverCargoToShop(shoesShop) {
        if (this.goods.length === 0)
            return;
        shoesShop.saveGoods(this.goods);
        this.goods = [];
    }
    loadShipment(shipment) {
        this.goods = shipment;
    }
}
