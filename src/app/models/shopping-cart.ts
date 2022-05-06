import { Product } from './product';
import { shoppingCartItem } from "./shopping-cart-item";

export class ShoppingCart {
    public Items: shoppingCartItem[] = [];
    constructor(public ItemsMap: { [productId: string]: shoppingCartItem | any }) {
        for (let productId in ItemsMap) {
            let item = ItemsMap[productId];
            this.Items.push(new shoppingCartItem(item.product, item.quantity))
        }
    }

    get productIds() {
        return Object.keys(this.Items)
    }
    get totalPrice() {
        let sum = 0;
        for (let item of this.Items) {
            sum += item.totalPrice;
        }
        return sum;
    }
    get ToalItems() {
        let count = 0;
        for (let item in this.Items) {
            count += this.Items[item].quantity;
        }
        return count;
    }

    getQuantity(product: Product) {

        let item = this.ItemsMap ? this.ItemsMap[product.key] : 0;

        return item?.quantity || 0;

    }
}