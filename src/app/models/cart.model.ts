//Définition du type Cart
//Un tableau contenant des CartItems
export interface Cart {
  items: Array<CartItem>;
}

//Définition du type CartItem
export interface CartItem {
  product: string;
  name: string;
  price: number;
  quantity: number;
  id: number;
}
