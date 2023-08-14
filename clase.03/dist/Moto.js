"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
const VehiculoTerrestre_1 = require("./VehiculoTerrestre");
class Moto extends VehiculoTerrestre_1.VehiculoTerrestre {
    constructor(alt, anch, lar, casco) {
        super(alt, anch, lar);
        this.casco = casco;
    }
}
exports.Moto = Moto;
