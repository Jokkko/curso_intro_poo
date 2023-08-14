export class Rueda{

    private presionAire: number

    public constructor(presion: number){
        this.presionAire = presion
    }

    public getPresionAire(){
        console.log(`la presion de la rueda es ${this.presionAire}`)
    }
}