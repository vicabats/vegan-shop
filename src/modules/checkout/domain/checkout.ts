import { CheckoutItem } from "./checkout-item";

export interface Checkout {
    items: CheckoutItem[];
    total_price: number;
}