export class TrainStation {
    factory;
    name;
    constructor(factory, name) {
        this.factory = factory;
        this.name = name;
    }
    getStationName() {
        return this.name;
    }
    getPackedGoods() {
        let amount = 4;
        let packages = [];
        for (let i = 0; i < amount; i++) {
            let shoesPack = this.factory.createShoesPackage(4);
            packages.push(shoesPack);
        }
        return packages;
    }
}
