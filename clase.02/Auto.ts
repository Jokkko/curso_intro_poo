import { Motor } from './Motor'
import { Rueda } from './Rueda'

export class Auto {
    private modelo: string
    public motor: Motor
    public ruedas: Array<Rueda>  
    /* constructor */
    public constructor( modelo: string, motor:Motor, ruedas:Array<Rueda>){
        console.log('Se creo un auto')
        this.modelo = modelo
        this.ruedas = ruedas
        this.motor  = motor
    }

    /* metodos */
    acelerar(km:number):void    /* Primera funcion declarada */
    acelerar():void             /* Segunda funcion declarada */
    acelerar(km?:number )       /* Combinacion de ambas */
    /* el ? nos indica que es opcional el km ya que la segunda funcion no lo usa */
    {
        /* Comportamiento de la funcion */
        if(typeof km === "number" ){
            console.log(`voy a ${km} km/h`)
        }else{
            console.log(`voy a 10 km/h`)
        }
    }

    /* getters */

    getModelo(){
        return this.modelo
    }
    /* Setters */

    
    setModelo(modelo:string){
        this.modelo = modelo
    }
}