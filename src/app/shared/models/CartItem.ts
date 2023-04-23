import { Supp } from "./Supp";

export class CartItem{
    constructor(supp:Supp){
    this.supp = supp;
}
    supp:Supp;
    quantity:number = 1;

    get price():number{
        return this.supp.price * this.quantity;
    }
}