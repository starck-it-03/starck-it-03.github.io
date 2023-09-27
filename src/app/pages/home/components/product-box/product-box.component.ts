// G.2
// Création d'un nouveau composant spécifique aux fiches produit
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Product } from "src/app/models/product.models";

@Component({
  selector: "app-product-box",
  templateUrl: "./product-box.component.html",
})
export class ProductBoxComponent implements OnInit {
  // G.7
  // Déclaration d'un input pr savoir si l'on est en mode coln display = 1
  // Initialisation à false puisque page se charge en 3 coln par row
  @Input() fullWidthMode = false;

  // H.4: Temp dummy data in order to emit it to the subscribed
  // NB: Le undefined est nécessaire pdt le temps d'attente du fetch à venir avec l'API
  // N.12: suppression du dummy data jusqu'alors utilisé et ajout d'un input
  @Input() product: Product | undefined;
  // = {
  //   id: 1,
  //   title: "Snickers",
  //   price: 150,
  //   category: 'shoes',
  //   description:'Description',
  //   image: 'https://via.placeholder.com/150'
  // }

  // H.5: Event afin d'émettre qlque chose entre elements enfant et parent
  @Output() addToCart = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  // H.2: Nouvelle méthode 'onAddToCart()' pr l'ajout d'un produit dans le panier
  onAddToCart(): void {
    // H.6: Emission à proprement parler
    this.addToCart.emit(this.product);
  }
}
