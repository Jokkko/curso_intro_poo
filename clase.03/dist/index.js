"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Moto_1 = require("./Moto");
const VehiculoTerrestre_1 = require("./VehiculoTerrestre");
const VT1 = new VehiculoTerrestre_1.VehiculoTerrestre(3, 5, 10);
console.log(VT1);
console.log(VT1.encender());
const M1 = new Moto_1.Moto(3, 5, 10, true);
console.log(M1);
console.log(M1.encender());
class Persona {
    constructor(nom) {
        this.nombre = nom;
    }
    presentarse() {
        return `Hola me llamo ${this.nombre}`;
    }
}
class Estudiante extends Persona {
    constructor(nom, leg) {
        super(nom);
        this.legajo = leg;
    }
    presentarse() {
        return `${super.presentarse()} y mi legajo es ${this.legajo} `;
    }
}
class Profesor extends Persona {
    constructor(nom, mate) {
        super(nom);
        this.materia = mate;
    }
    presentarse() {
        return `${super.presentarse()} y doy ${this.materia}`;
    }
}
const e1 = new Estudiante('Joko', 123);
const pr1 = new Profesor('pedro', 'historia');
const p1 = new Persona('Alberto');
console.log(e1.presentarse());
console.log(p1.presentarse());
console.log(pr1.presentarse());
