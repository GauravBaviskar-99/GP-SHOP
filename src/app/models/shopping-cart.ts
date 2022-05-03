import { shoppingCartItem } from "./shopping-cart-item";

export class ShoppingCart {
    constructor(public Items: shoppingCartItem[]) {

    }
    get ToalItems() {
        let count = 0;
        for (let item in this.Items) {
            count += this.Items[item].quantity;
        }
        return count;
    }
}