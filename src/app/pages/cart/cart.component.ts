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
        name: "snickers",
        price: 150,
        quantity: 1,
        id: 1,
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
}
