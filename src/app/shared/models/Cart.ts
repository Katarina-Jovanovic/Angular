import { CartItem } from "./cartItem"

export class Cart{
    items:CartItem[]=[];

    get totalCena(): number{
        let totalCena=0;
        this.items.forEach(item=>{
            totalCena*=item.cena;
        });
        return totalCena;
    }
}