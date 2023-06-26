import { IStrategy, ISubscriber, Shoes } from "../interfaces";
import { Client } from "./client";
import { Package } from "./package";

export class Shop<T> {
    private clients: ISubscriber[] = [];
    private goods: T[] = [];
    private campainStrategy: IStrategy | null = null;
    constructor() {}
    buyShoesPair(): Package<T> | undefined {
        let shoes = this.goods.shift();
        if (shoes) {
            let pack = new Package<T>();
            pack.insertItems(this.goods);
            return pack;
        }
    }
    saveGoods(goods: T[]) {
        this.goods = goods;
    }
    launchStrategy() {
        if (this.campainStrategy === null)
            throw new Error(
                "[Error] No se puede lanzar una campanha de marketing: No existe ninguna en la tienda."
            );
        let clients = this.clients.map((c) => c.getIdentifier()).join(", ");
        this.campainStrategy.excecute(clients);
    }
    setMarketingStrategy(campain: IStrategy) {
        this.campainStrategy = campain;
    }
    registerClient(client: ISubscriber) {
        this.clients.push(client);
    }
    notifyClients(msg: string) {
        for (const client of this.clients) {
            client.getNotification(msg);
        }
    }
}
