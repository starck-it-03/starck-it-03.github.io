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

  // H.3: Temp dummy data in order to emit it to the subscribed 
  // NB: Le undefined est nécessaire pdt le temps d'attente du fetch à venir
  product: Product | undefined = {
    id: 1,
    title: "Snickers",
    price: 150,
    category: "shoes",
    description: "Description",
    image: "https://via.placeholder.com/150",
  };

  // H.5: Event in order to emit this product entre elements enfant et parent
  @Output() addToCart = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  // H.2: Nouvelle méthode pr ajouter un article dans le panier
  onAddToCart(): void {
    // H.6: Emission à proprement parler
    this.addToCart.emit(this.product);
  }
}
