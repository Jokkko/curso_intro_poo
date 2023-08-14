"use strict";
console.log('Hello World Ts');
let nombre = "Joaquin";
let numero = 1;
let booleano = true;
class Auto {
    constructor(marca, modelo, cantidadRuedas, cantidadPuertas) {
        console.log('Auto Creado');
        this.marca = marca;
        this.modelo = modelo;
        this.cantidadRuedas = cantidadRuedas;
        this.cantidadPuertas = cantidadPuertas;
    }
}
class Estudiante {
    constructor(name, age) {
        this.nombre = name;
        this.edad = age;
        console.log('Estudiante Creado');
    }
}
const e1 = new Estudiante("Joaquin", 18);
const e2 = new Estudiante("Pedro", 20);
const e3 = new Estudiante("Alberto", 22);
const e4 = new Estudiante("Morena", 23);
const e5 = new Estudiante("Vanina", 24);
console.log(e1, e2, e3, e4, e5);
console.log('-----------------------');
const e6 = new Estudiante("PEDRI", 54);
console.log(e6);
class Pelota {
    constructor(color, tipo) {
        console.log('Pelota Creada');
        this.color = color;
        this.tipo = tipo;
    }
    informacion() {
        console.log(`Soy una pelota de color ${this.color} y soy de ${this.tipo}`);
    }
    rebotar() {
        console.log('Rebotando');
    }
}
const pelotaFutbol = new Pelota("Blanco", "Futbol");
pelotaFutbol.informacion();
