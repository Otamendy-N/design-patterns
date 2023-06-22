import { AddidasFactory, NikesFactory } from "./src/factories";
import { StorageGuardPost } from "./src/storage";
import { Train } from "./src/train";
import { TrainStation } from "./src/trainStation";
import { measureExecutionTime } from "./src/utilities";

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
 * - Decorator
 * - Proxy
 * - Flyweight - in the creation of shoes
 * - Facade
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

    let nikiesPackage = nikesFactory.createShoesPackage(200_000);
    let addidasPackage = addidasFactory.createShoesPackage(200_000);

    // adapters for loading cargo into the train.
    // here i'm also implementing the bridge pattern if you think about it.
    let nikesStation = new TrainStation(nikesFactory, "Nikes Metropolitan.");
    let addidasStation = new TrainStation(
        addidasFactory,
        "Addidas Metropolitan."
    );

    // our client in where the cargo will be load
    let train = new Train();

    train.goToStation(nikesStation);
    train.loadCargo();
    // train.listGoods();
    train.deliverCargo();

    train.goToStation(addidasStation);
    train.loadCargo();
    // train.listGoods();
    let cargo = train.deliverCargo();

    // the guards post acts as a proxy for the actual Storage
    let guardsPost = new StorageGuardPost();
    guardsPost.placeGoods([...cargo]);
}

let totalTime = measureExecutionTime(main);
console.log(
    "[SYSTEM INFO] Total excecution of this program took: " + totalTime + " ms."
);
