import { Package } from "./package";
export class Shop {
    clients = [];
    goods = [];
    campainStrategy = null;
    constructor() { }
    buyShoesPair() {
        let shoes = this.goods.shift();
        if (shoes) {
            let pack = new Package();
            pack.insertItems(this.goods);
            return pack;
        }
    }
    saveGoods(goods) {
        this.goods = goods;
    }
    launchStrategy() {
        if (this.campainStrategy === null)
            throw new Error("[Error] No se puede lanzar una campanha de marketing: No existe ninguna en la tienda.");
        let clients = this.clients.map((c) => c.getIdentifier()).join(", ");
        this.campainStrategy.excecute(clients);
    }
    setMarketingStrategy(campain) {
        this.campainStrategy = campain;
    }
    registerClient(client) {
        this.clients.push(client);
    }
    notifyClients(msg) {
        for (const client of this.clients) {
            client.getNotification(msg);
        }
    }
}
