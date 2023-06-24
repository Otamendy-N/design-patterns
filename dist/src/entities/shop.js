export class Shop {
    clients = [];
    goods = [];
    constructor() { }
    saveGoods(goods) {
        this.goods = goods;
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
