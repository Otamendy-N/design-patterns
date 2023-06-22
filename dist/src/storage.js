class Storage {
    goods = new Set();
    constructor() { }
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
    placeGoods(goods) {
        if (this.storage === null) {
            this.storage = new Storage();
        }
        this.storage.placeGoods(goods);
        console.log("[Info] Goods inserted in storage:");
        this.storage.listGoods();
    }
}
