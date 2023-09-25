import { Component, OnInit } from "@angular/core";
import { Cart, CartItem } from "src/app/models/cart.model";

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
  constructor() {}

  //Customed initialisation
  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }

  //Fonction pour calculer le total du panier
  getTotal(items: Array<CartItem>): number {
    return items
      .map((item) => item.price * item.quantity)
      .reduce((prev, current) => prev + current, 0);
  }
}
