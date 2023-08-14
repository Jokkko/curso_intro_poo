import { VehiculoTerrestre } from "./VehiculoTerrestre";

export class Autobus extends VehiculoTerrestre{
    
    private puertas:boolean

    
    constructor(alt:number, anch:number, lar:number, puertas:boolean){
        super(alt,anch,lar)
        this.puertas = puertas
    }
}