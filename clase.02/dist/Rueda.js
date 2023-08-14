"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rueda = void 0;
class Rueda {
    constructor(presion) {
        this.presionAire = presion;
    }
    getPresionAire() {
        console.log(`la presion de la rueda es ${this.presionAire}`);
    }
}
exports.Rueda = Rueda;
