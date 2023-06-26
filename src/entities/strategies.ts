import { IStrategy } from "../interfaces";

export class InfluencersStrategy implements IStrategy {
    excecute(data: string): void {
        console.log("[Action] Se lanzo la campanha de marketing con los influencers.");
        console.log("[Info] Targets: \n\t", data);
    }
}
export class M2MStrategy implements IStrategy {
    excecute(data: string): void {
        console.log("[Action] Se lanzo la campanha de marketing boca a boca.");
        console.log("[Info] Targets: \n\t", data);
    }
}