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
  }

  // I.12: Simplification via appel de la fonction déplacée vers cart.service.ts
  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }
}
