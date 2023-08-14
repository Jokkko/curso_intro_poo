console.log('Hello World Ts')

let nombre:string = "Joaquin"

let numero:number = 1

let booleano:boolean = true

class Auto{
    
    marca:string 
    modelo:string
    cantidadRuedas:number
    cantidadPuertas:number

    constructor(marca:string,modelo:string,cantidadRuedas:number,cantidadPuertas:number){
        console.log('Auto Creado')
        this.marca = marca
        this.modelo = modelo
        this.cantidadRuedas = cantidadRuedas
        this.cantidadPuertas = cantidadPuertas
    }
}

class Estudiante{
    
    nombre: string
    edad: number
    constructor(name:string,age:number){
        this.nombre = name
        this.edad = age
        console.log('Estudiante Creado')
    }
}

const e1 = new Estudiante("Joaquin",18)
const e2 = new Estudiante("Pedro",20)
const e3 = new Estudiante("Alberto",22)
const e4 = new Estudiante("Morena",23)
const e5 = new Estudiante("Vanina",24)
console.log(e1, e2 , e3 , e4 , e5) 

console.log('-----------------------')   
const e6 = new Estudiante("PEDRI",54)
console.log(e6)

class Pelota{

    color:string
    tipo:string

    constructor(color:string,tipo:string){
        console.log('Pelota Creada')
        this.color = color
        this.tipo = tipo
    }

    informacion(){
        console.log(`Soy una pelota de color ${this.color} y soy de ${this.tipo}`)
    }

    rebotar(){
        console.log('Rebotando')
    }
}

const pelotaFutbol = new Pelota("Blanco","Futbol")

pelotaFutbol.informacion()  