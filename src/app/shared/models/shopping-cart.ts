import { Product } from './product';
import { shoppingCartItem } from "./shopping-cart-item";

export class ShoppingCart {
    public Items: shoppingCartItem[] = [];
    constructor(private ItemsMap: { [productId: string]: shoppingCartItem | any }) {
        ItemsMap = ItemsMap || {};
        for (let productId in ItemsMap) {
            let item = ItemsMap[productId];
            let x = new shoppingCartItem({ ...item, key: productId });
            this.Items.push(x);
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