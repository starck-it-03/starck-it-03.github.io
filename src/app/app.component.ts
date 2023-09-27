import { Component, OnInit } from "@angular/core";
import { Cart } from "./models/cart.model";
import { CartService } from "./services/cart.service";

//I.19: Utilisation concrète de la subscription
@Component({
  selector: "app-root",
  template:
    "<app-header [cart]='cart'></app-header><router-outlet></router-outlet>",
  styles: [],
})

//I.16: Ajout de l'implementation OnInit
export class AppComponent implements OnInit {
  //I.15: Ajout d'une nouvelle propriété
  cart: Cart = { items: [] };

  //I.17: Ajout du service cartService
  constructor(private cartService: CartService) {}

  //I.18: Déclaration de la subscription
  ngOnInit() {
    this.cartService.cart.subscribe((_cart) => {
      this.cart = _cart;
    });
  }
}
