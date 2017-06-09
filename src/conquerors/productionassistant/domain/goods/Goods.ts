export abstract class Goods {
    quantity : number;

    constructor (quantity : number) {
        this.quantity = quantity;
    }

    abstract name() :  string;
}