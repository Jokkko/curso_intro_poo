import { VehiculoTerrestre } from "./VehiculoTerrestre";

export class Moto extends VehiculoTerrestre{
    
    private casco: boolean

    constructor(alt:number, anch:number, lar:number, casco:boolean){
        super(alt,anch,lar)
        this.casco = casco
    }
}