import { Ciruclo } from "./Circulo"
import { Moto } from "./Moto"
import { VehiculoTerrestre } from "./VehiculoTerrestre"


/* const C1 = new Ciruclo(1)

console.log(C1.getRadio())
C1.setRadio(12)
console.log(C1.getRadio()) */

const VT1 = new VehiculoTerrestre(3,5,10)

console.log(VT1)
console.log(VT1.encender())

const M1 = new Moto(3,5,10,true)

console.log(M1)
console.log(M1.encender())


class Persona{
    private nombre:string

    constructor(nom:string){
        this.nombre = nom
    }

    presentarse():string{
        return `Hola me llamo ${this.nombre}`
    }
}

class Estudiante extends Persona{
    legajo:number

    constructor(nom:string,leg:number){
        super(nom)
        this.legajo = leg
    }

    presentarse(): string {
        return `${super.presentarse()} y mi legajo es ${this.legajo} `
    }
}

class Profesor extends Persona{
    private materia:string

    constructor(nom:string, mate:string){
        super(nom)
        this.materia = mate
    }
    
    presentarse(): string {
        return `${super.presentarse()} y doy ${this.materia}`
    }
}
const e1 = new Estudiante('Joko',123)
const pr1 = new Profesor('pedro','historia')
const p1 = new Persona('Alberto')


console.log(e1.presentarse())
console.log(p1.presentarse())
console.log(pr1.presentarse())