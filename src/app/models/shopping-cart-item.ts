import { Product } from 'src/app/models/product';
export class shoppingCartItem {

    public price: number;
    public key: string;
    public title: string;
    public imageUrl: string;
    public quantity: number;

    constructor(item?: Partial<shoppingCartItem>) {
        Object.assign(this, item);
    }

    get totalPrice() {
        return this.price * this.quantity;
    }

}