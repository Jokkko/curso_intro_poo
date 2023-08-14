"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehiculoTerrestre = void 0;
class VehiculoTerrestre {
    constructor(alt, anch, lar) {
        this.alto = alt;
        this.ancho = anch;
        this.largo = lar;
    }
    encender() {
        return 'BRRRRUM BRRRUM';
    }
}
exports.VehiculoTerrestre = VehiculoTerrestre;
