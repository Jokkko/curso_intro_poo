"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
class Auto {
    constructor(modelo, motor, ruedas) {
        console.log('Se creo un auto');
        this.modelo = modelo;
        this.ruedas = ruedas;
        this.motor = motor;
    }
    acelerar(km) {
        if (typeof km === "number") {
            console.log(`voy a ${km} km/h`);
        }
        else {
            console.log(`voy a 10 km/h`);
        }
    }
    getModelo() {
        return this.modelo;
    }
    setModelo(modelo) {
        this.modelo = modelo;
    }
}
exports.Auto = Auto;
