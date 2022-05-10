import { ShoppingCart } from './shopping-cart';
export class Order {

    datePlace: number;
    Items: any[] = [];
    constructor(private userId: string, public shippingDetails: any, ShoppingCart: ShoppingCart) {
        this.datePlace = new Date().getTime();

        this.Items = ShoppingCart.Items.map(item => {
            return {
                product: {
                    title: item.title,
                    price: item.price,
                    imageUrl: item.imageUrl
                },
                quantity: item.quantity,
                totalPrice: item.totalPrice,
            }
        })

    }
}

// /* only Public or Private or generic variable are created when we create objec usig  constructor