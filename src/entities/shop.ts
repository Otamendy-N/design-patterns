import { ISubscriber } from "../interfaces";
import { Client } from "./client";

export class Shop<T> {
    private clients: ISubscriber[] = [];
    private goods: T[] = [];
    constructor() {}
    saveGoods(goods: T[]) {
        this.goods = goods;
    }
    registerClient(client: ISubscriber) {
        this.clients.push(client)
    }
    notifyClients(msg: string) {
        for (const client of this.clients) {
            client.getNotification(msg);
        }
    }

}
