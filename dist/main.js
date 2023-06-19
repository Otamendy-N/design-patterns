import { AddidasFactory, NikesFactory } from "./factories";
/**
 * Here i am trying to implement the following creational design patterns:
 * - Singleton
 * - Factory Method
 * - Abstract Factory
 * - Builder
*/
function main() {
    // this are singleton factory intances
    let nikesFactory = NikesFactory.getFactory("Mexico");
    nikesFactory.printLocation();
    let addidasFactory = AddidasFactory.getFactory("Canada");
    addidasFactory.printLocation();
    // one pair of each company
    let nikies = nikesFactory.createShoesPair(42, "red");
    let addidas = addidasFactory.createShoesPair(39, "black");
    nikies.use();
    nikies.printProperties();
    addidas.use();
    addidas.printProperties();
    let nikiesPackage = nikesFactory.createShoesPackage(7);
    let addidasPackage = addidasFactory.createShoesPackage(5);
    let nikiesPairs = nikiesPackage.open();
    let addidasPairs = addidasPackage.open();
    console.table(nikiesPairs);
    console.table(addidasPairs);
}
main();
