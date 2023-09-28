import { Component, Input } from "@angular/core";
import { Cart, CartItem } from "src/app/models/cart.model";
import { CartComponent } from "src/app/pages/cart/cart.component";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent {
  // I.1: var privée de type interface Cart
  // Initialisation à vide
  private _cart: Cart = { items: [] };

  // I.2: var pour le nbre de produit dans le panier
  // Initialisation à 0
  itemsQuantity = 0;

  // I.3: getter et setter necessaires à la MàJ de la var privée _cart
  @Input()

  //getter
  get cart(): Cart {
    return this._cart;
  }
  //setter
  set cart(cart: Cart) {
    this._cart = cart;
    this.itemsQuantity = cart.items
      // Transformation du array 'cart' en un array de seulement les quantités
      .map((item) => item.quantity)
      // Addition de toutes ces quantités
      .reduce((prev, current) => prev + current, 0);
  }

  // I.13: Appelle du service CartService pr utiliser la méthode getTotal()
  // Nb: private est nécessaire lorsque l'on utilise uniquement
  // au sein du fichier.ts et non dans fichier.html
  constructor(private cartService: CartService) {}

  // I.14: Fonction pour calculer le total du panier
  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }
}
