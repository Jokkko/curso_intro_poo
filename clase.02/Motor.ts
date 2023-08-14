export class Motor{

    private cilindrada:number

    public constructor(cilin:number){

        this.cilindrada = cilin
    }

    public  getCilindrada(){
        console.log(`La cilindrada de el motor es de ${this.cilindrada}`)
    }
}