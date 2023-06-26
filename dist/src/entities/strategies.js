export class InfluencersStrategy {
    excecute(data) {
        console.log("[Action] Se lanzo la campanha de marketing con los influencers.");
        console.log("[Info] Targets: \n\t", data);
    }
}
export class M2MStrategy {
    excecute(data) {
        console.log("[Action] Se lanzo la campanha de marketing boca a boca.");
        console.log("[Info] Targets: \n\t", data);
    }
}
