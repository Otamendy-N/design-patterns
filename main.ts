import { AddidasFactory, NikesFactory } from "./src/entities/factories";
import { Shoes } from "./src/interfaces";
import { StorageGuardPost } from "./src/entities/storage";
import { Train } from "./src/entities/train";
import { TrainStation } from "./src/entities/trainStation";
import { measureExecutionTime } from "./src/utilities";
import { Truck } from "./src/entities/truck";
import { Shop } from "./src/entities/shop";
import { Client } from "./src/entities/client";

/**
 * Here i am trying to implement the following creational design patterns:
 * - Singleton
 * - Factory Method
 * - Abstract Factory
 * - Builder - also with a 'director'
 * Structural patterns:
 * - Adapter
 * - Bridge
 * - Composite - for printing out contents
 * - Decorator - in the trains
 * - Proxy - for the storage
 * - Flyweight - in the creation of shoes
 * - Facade
 * Behavioral patterns:
 * - Observer
 */

function main() {
    // adaptees, where items are been produced
    // this are singleton factory intances
    let nikesFactory = NikesFactory.getFactory("Mexico");
    nikesFactory.printLocation();
    let addidasFactory = AddidasFactory.getFactory("Canada");
    addidasFactory.printLocation();

    // one pair of each company
    // let nikies = nikesFactory.createShoesPair(42, "red");
    // let addidas = addidasFactory.createShoesPair(39, "black");

    // adapters for loading cargo into the train.
    // here i'm also implementing the bridge pattern if you think about it.
    let nikesStation = new TrainStation(nikesFactory, "Nikes Metropolitan.");
    let addidasStation = new TrainStation(
        addidasFactory,
        "Addidas Metropolitan."
    );

    // our client in where the cargo will be load
    let train = new Train();
    let guardsPost = new StorageGuardPost();

    train.goToStation(nikesStation);
    train.loadCargo();
    let nikesCargo = train.deliverCargo();
    guardsPost.placeGoods([...nikesCargo]);

    train.goToStation(addidasStation);
    train.loadCargo();
    let addidasCargo = train.deliverCargo();
    guardsPost.placeGoods([...addidasCargo]);

    let truck = new Truck();
    guardsPost.giveGoodsTo(truck);

    let shoesShop = new Shop<Shoes>();

    truck.deliverCargoToShop(shoesShop);

    let jose = new Client("Jose");
    let manoli = new Client("Manoli");
    let pedro = new Client("Pedro");

    shoesShop.registerClient(jose);
    shoesShop.registerClient(manoli);
    shoesShop.registerClient(pedro);

    shoesShop.notifyClients("ya han llegado sus nuevos zapatos!!")

    // the guards post acts as a proxy for the actual Storage
}

main()
// let totalTime = measureExecutionTime(main);
// console.log(
//     "[SYSTEM INFO] Total excecution of this program took: " + totalTime + " ms."
// );
