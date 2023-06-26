import { AddidasFactory, NikesFactory } from "./src/entities/factories";
import { StorageGuardPost } from "./src/entities/storage";
import { Train } from "./src/entities/train";
import { TrainStation } from "./src/entities/trainStation";
import { Truck } from "./src/entities/truck";
import { Shop } from "./src/entities/shop";
import { Client } from "./src/entities/client";
import { InfluencersStrategy, M2MStrategy } from "./src/entities/strategies";
import { CloseShoesPackCommand, OpenShoesPackCommand, RemoteControl as RobotControl, } from "./src/entities/commands";
import { FootballGame, TenisGame } from "./src/entities/template";
import ConveyorBelt from "./src/entities/conveyorBelt";
import { Audictioner } from "./src/entities/audictioner";
/**
 * The sole purpose of this package is to understand common design patterns,
 * this is just a foo bar proyect for that sake.
 *
 * Here i am trying to implement the following creational design patterns:
 * - Singleton
 * - Factory Method
 * - Abstract Factory
 * - Builder - also with a 'director'
 *
 * Structural patterns:
 * - Adapter
 * - Bridge
 * - Composite - for printing out contents
 * - Decorator - in the trains
 * - Proxy - for the storage
 * - Flyweight - in the creation of shoes
 * - Facade
 *
 * Behavioral patterns:
 * - Observer
 * - Strategy
 * - Command
 * - Template method
 * - Iterator
 * - Mediator
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
    let addidasStation = new TrainStation(addidasFactory, "Addidas Metropolitan.");
    // our client in where the cargo will be load
    let train = new Train();
    // the guards post acts as a proxy for the actual Storage
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
    let shoesShop = new Shop();
    truck.deliverCargoToShop(shoesShop);
    let jose = new Client("Jose");
    let manoli = new Client("Manoli");
    let pedro = new Client("Pedro");
    shoesShop.registerClient(jose);
    shoesShop.registerClient(manoli);
    shoesShop.registerClient(pedro);
    shoesShop.notifyClients("ya han llegado sus nuevos zapatos!!");
    let m2mCampain = new M2MStrategy();
    let influencersCampain = new InfluencersStrategy();
    shoesShop.setMarketingStrategy(m2mCampain);
    shoesShop.launchStrategy();
    shoesShop.setMarketingStrategy(influencersCampain);
    shoesShop.launchStrategy();
    let control = new RobotControl();
    let pack = shoesShop.buyShoesPair();
    if (pack === undefined)
        return;
    let openCommand = new OpenShoesPackCommand(pack);
    let closeCommand = new CloseShoesPackCommand(pack);
    control.addCommand(openCommand);
    control.addCommand(closeCommand);
    control.excecuteCommands();
    // template method - this one doesn't seem too usefull
    let tenisGame = new TenisGame();
    tenisGame.play();
    let footballGame = new FootballGame();
    footballGame.play();
    let testingPack = nikesFactory.createShoesPackage(3);
    let array = [...testingPack.open().values()];
    let conveyorBelt = new ConveyorBelt(array);
    while (conveyorBelt.hasNext()) {
        let shoes = conveyorBelt.next();
        console.log(shoes);
    }
    conveyorBelt.next();
    let audictioner = new Audictioner();
    audictioner.registerColleague(jose);
    audictioner.registerColleague(manoli);
    audictioner.registerColleague(pedro);
    jose.send("oye que paso?");
    console.log("----------------------------");
    pedro.send("no paso na");
    console.log("----------------------------");
    manoli.send("este jose siempre armando foco");
    console.log("----------------------------");
}
main();
// let totalTime = measureExecutionTime(main);
// console.log(
//     "[SYSTEM INFO] Total excecution of this program took: " + totalTime + " ms."
// );
