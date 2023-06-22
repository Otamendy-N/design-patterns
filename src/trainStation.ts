import { Station, Shoes, ShoesFactory } from "./interfaces";
import { Package } from "./package";

export class TrainStation implements Station<Shoes> {
    private readonly factory: ShoesFactory<Shoes>
    private readonly name: string
    constructor(factory: ShoesFactory<Shoes>, name: string) {
        this.factory = factory
        this.name = name
    }
    getStationName(): string {
        return this.name
    }
    getPackedGoods(): Package<Shoes>[] {
        let amount = 4
        let packages = [];
        for (let i = 0; i < amount; i++) {
            let shoesPack = this.factory.createShoesPackage(4)
            packages.push(shoesPack)
        }
        return packages
    }
}