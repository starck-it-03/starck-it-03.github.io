import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/models/product.models";
import { CartService } from "src/app/services/cart.service";

// G.4
// Déclaration d'un objet pr le mapping des hauteurs de carte selon le nbr d'objet choisi par rangée
// Type = objet via {}
// Première valeur: le nombre de colonnes affichées par rangée
// Clef via [] et number
// Deuxième valeur: la hauteur à appliquer
// Valeur et number
const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };

@Component({
  // ng g c home: ng generate component home
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
  // D.1
  // Déclaration de la var 'cols' dans le composant principale et initialisation à 3
  cols = 3;

  // G.5
  // Déclaration d'une variable pr la hauteur des cartes
  // Dont la valeur sera dynamique en fonction du nombre de colonnes affcihées par rangée
  rowHeight = ROWS_HEIGHT[this.cols];

  // F.7
  // Déclaration de la var 'category' dans le cpnt principal et non-initialisation (=> undefined obligatoire)
  category: string | undefined;

  // Injection de la source qui vient d'être créée
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  // D.3
  // Déclaration de la fn 'onColumnsCountChange' pr MaJ de la var 'cols'
  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
    console.log("this.cols (@home.component.ts): " + this.cols);

    // G.6
    // Ajout de la mise à jour de la hauteur des cartes
    this.rowHeight = ROWS_HEIGHT[this.cols];
    console.log(
      "ROWS_HEIGHT[this.cols] (@home.component.ts): " + ROWS_HEIGHT[this.cols]
    );
  }

  // F.6
  // Déclaration de la fn 'onShowCategory' pr MaJ de la var 'category'
  onShowCategory(newCategory: string): void {
    this.category = newCategory;
    console.log("this.category (@home.component.ts): " + this.category);
  }

  // H.8: Nouvelle méthode onAddToCart
  // Le paramètre est product
  // Du type Product interface que l'on vient de créer et d'importer
  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      // Le nom des attributs est selon l'API qui va être utilisée 
      // => Mapping à prendre ainsi
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id,
    });
  }
}
