var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
import { chuchu } from "./decorators";
export let Train = (() => {
    let _instanceExtraInitializers = [];
    let _goToStation_decorators;
    return class Train {
        static {
            _goToStation_decorators = [chuchu];
            __esDecorate(this, null, _goToStation_decorators, { kind: "method", name: "goToStation", static: false, private: false, access: { has: obj => "goToStation" in obj, get: obj => obj.goToStation } }, null, _instanceExtraInitializers);
        }
        cargo = (__runInitializers(this, _instanceExtraInitializers), new Set());
        station = null;
        constructor() { }
        goToStation(station) {
            this.station = station;
            console.log("[Action] Train moved to the station: " + station.getStationName());
        }
        loadCargo() {
            if (this.station === null) {
                console.warn("[Warning] Unavailable to load cargo: \n\t - Train must be at a station to load goods.");
                return;
            }
            let packages = this.station.getPackedGoods();
            this.cargo = new Set(packages);
        }
        listGoods() {
            console.log("[Info] Railcar 1 has following goods:");
            this.cargo.forEach((element) => {
                element.listGoods();
            });
        }
        deliverCargo() {
            let cargo = this.cargo;
            this.station = null;
            this.cargo = new Set();
            return cargo;
        }
    };
})();
