export class VehiculoTerrestre{
    
    private alto: number
    private ancho: number
    private largo: number

    constructor(alt:number, anch:number, lar:number){
        this.alto = alt
        this.ancho = anch
        this.largo = lar
    }

    public encender():string {
        return 'BRRRRUM BRRRUM'
    }
}