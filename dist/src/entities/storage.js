class Storage {
    goods = new Set();
    constructor() { }
    takeAllGoods() {
        let goods = this.goods;
        this.goods = new Set();
        return goods;
    }
    listGoods() {
        console.table(this.goods);
    }
    placeGoods(goods) {
        this.goods = new Set(goods);
    }
}
export class StorageGuardPost {
    storage = null;
    constructor() { }
    giveGoodsTo(truck) {
        if (this.storage === null) {
            console.log("[Info] Storage has no goods in it.");
            return;
        }
        let shipment = this.storage.takeAllGoods();
        truck.loadShipment([...shipment]);
    }
    placeGoods(goods) {
        if (this.storage === null) {
            this.storage = new Storage();
        }
        this.storage.placeGoods(goods);
        console.log("[Info] Goods inserted in storage:");
        this.storage.listGoods();
    }
}
