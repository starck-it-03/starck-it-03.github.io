// G.2
// Création d'un nouveau composant spécifique aux fiches produit
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-box",
  templateUrl: "./product-box.component.html",
})
export class ProductBoxComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
