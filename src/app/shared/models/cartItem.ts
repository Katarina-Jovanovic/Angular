import { Proizvod } from "./proizvod";

export class CartItem{
    constructor(proizvod:Proizvod){
        this.proizvod=proizvod;
        
       
    }
    proizvod:Proizvod;
    quantity:number=1;

    get cena(): number{
        return this.proizvod.cena* this.quantity;
    }

}