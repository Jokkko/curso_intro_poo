export class Ciruclo{

    private radio: number
    
    public constructor(radio:number){
        this.radio = radio
    }

    public setRadio(radio:number):number{
        let error: number = 0

        if(radio > 0){
            this.radio = radio
            error = 1 
        }

        return error
    }

    public getRadio(){
        return this.radio
    }
}