import { chuchu } from "./decorators";
import { Station, PrintableContainer } from "./interfaces";
import { Package } from "./package";

export class Train<Product> implements PrintableContainer {
    private cargo: Set<Package<Product>> = new Set();
    private station: Station<Product> | null = null;
    constructor() {}

    @chuchu
    goToStation(station: Station<Product>): void {
        this.station = station;
        console.log(
            "[Action] Train moved to the station: " + station.getStationName()
        );
    }
    loadCargo(): void {
        if (this.station === null) {
            console.warn(
                "[Warning] Unavailable to load cargo: \n\t - Train must be at a station to load goods."
            );
            return;
        }
        let packages = this.station.getPackedGoods();
        this.cargo = new Set(packages);
    }
    listGoods(): void {
        console.log("[Info] Railcar 1 has following goods:");
        this.cargo.forEach((element) => {
            element.listGoods();
        });
    }
    deliverCargo(): Set<Package<Product>> {
        let cargo = this.cargo;
        this.station = null;
        this.cargo = new Set();
        return cargo;
    }
}
