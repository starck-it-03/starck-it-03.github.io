import { Component, OnInit } from "@angular/core";
import { Cart, CartItem } from "src/app/models/cart.model";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
})
export class CartComponent implements OnInit {
  //Dummy object awaiting dynamic cart works
  cart: Cart = {
    items: [
      {
        product: "https://via.placeholder.com/150",
        name: "Sublime 500G",
        price: 7.79,
        quantity: 1,
        id: 1,
      },
      {
        product: "https://via.placeholder.com/150",
        name: "Chiapas 250G",
        price: 4.99,
        quantity: 1,
        id: 2,
      },
      {
        product: "https://via.placeholder.com/150",
        name: "Magnifico 250G",
        price: 4.49,
        quantity: 1,
        id: 3,
      },
    ],
  };

  //Needed property
  dataSource: Array<CartItem> = [];

  //Needed property
  displayedColumns: Array<string> = [
    "product",
    "name",
    "price",
    "quantity",
    "total",
    "action",
  ];
  // I.11: Appelle du service CartService pr utiliser la méthode getTotal()
  constructor(private cartService: CartService) {}

  //Customed initialisation
  ngOnInit(): void {
    this.dataSource = this.cart.items;

    // J.1: Subscription au nouveau panier créé
    this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    });

    // J.1*: Bonus exercice
    // Stocker ce panier dynamique dans la mémoire locale du browser
    // afin qu'en cas de refresh, l'état du panier ne soit pas perdu
  }

  // I.12: Simplification via appel de la fonction déplacée vers cart.service.ts
  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }

  // J.2: Implementation du btn ClearAll pr vider tout le panier en une fois
  onClearCart(): void {
    this.cartService.clearCart();
  }

  // K.1: Implementation du btn Close pr supprimer une seul ligne du panier
  onRemoveFromCart(item: CartItem): void {
    this.cartService.removeFromCart(item);
  }

  // L.1: Implementation du btn + pr ajouter un même article déjà dans le panier
  onAddQuantity(item: CartItem): void {
    this.cartService.addToCart(item);
  }
}
