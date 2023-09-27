import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { BehaviorSubject } from "rxjs";
import { Cart, CartItem } from "../models/cart.model";

@Injectable({
  providedIn: "root",
})

// H.8: Définition du nouveau service 'CartService'
// ng g s cart: ng generate service cart
export class CartService {
  // Définition d'un panier vide dans un premier temps
  // Sera modifié quand l'on y ajoutera des produits
  // Le BehaviorSubject est un type qui sert à alerter les composants qui y sont abonnés
  cart = new BehaviorSubject<Cart>({ items: [] });

  // Notification au user quand le panier a changé
  constructor(private _snackBar: MatSnackBar) {}

  addToCart(item: CartItem): void {
    // Destructuration de l'ancien panier
    const items = [...this.cart.value.items];

    // Le produit que l'on va ajouter, rechercher son id dans l'ancien panier
    const itemInCart = items.find((_item) => _item.id === item.id);

    // Si l'id du nouveau produit s'y trouve déjà
    if (itemInCart) {
      // Incrémenter de un sa quantité
      itemInCart.quantity += 1;
    } else {
      // Sinon ajouter ce nouvel produit dans le panier
      items.push(item);
    }

    // Emettre cette nouvelle valeur à tous les componsants abonnés au panier
    // this.cart.next({ items: items });
    // Identique mais version raccourcie
    this.cart.next({ items });

    this._snackBar.open("1 article ajouté au panier", "Ok", { duration: 3000 });

    //console.log(this.cart.value);
  }

  // I.10: Placer le code du getTotal existant dans cart.component.ts
  // dans le Service afin de pouvoir l'utiliser à plusieurs endroits
  getTotal(items: Array<CartItem>): number {
    return items
      .map((item) => item.price * item.quantity)
      .reduce((prev, current) => prev + current, 0);
  }

  // J.3: Implementation fn clearCart()
  clearCart(): void {
    this.cart.next({ items: [] });
    this._snackBar.open("Panier entièrement vidé.", "Ok", { duration: 3000 });
  }
}
