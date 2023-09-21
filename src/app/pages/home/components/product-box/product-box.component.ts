// G.2
// Création d'un nouveau composant spécifique aux fiches produit
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-product-box",
  templateUrl: "./product-box.component.html",
})
export class ProductBoxComponent implements OnInit {
  // G.7
  // Déclaration d'un input pr savoir si l'on est en mode coln display = 1
  // Initialisation à false puisque page se charge en 3 coln par row
  @Input () fullWidthMode = false;
  
  constructor() {}

  ngOnInit(): void {}
}
