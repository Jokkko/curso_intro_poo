"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Autobus = void 0;
const VehiculoTerrestre_1 = require("./VehiculoTerrestre");
class Autobus extends VehiculoTerrestre_1.VehiculoTerrestre {
    constructor(alt, anch, lar, puertas) {
        super(alt, anch, lar);
        this.puertas = puertas;
    }
}
exports.Autobus = Autobus;
