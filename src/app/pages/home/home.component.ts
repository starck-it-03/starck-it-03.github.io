import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Product } from "src/app/models/product.models";
import { CartService } from "src/app/services/cart.service";
import { StoreService } from "src/app/services/store.service";

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

// N.13: Ajout de 'OnDestroy'
export class HomeComponent implements OnInit, OnDestroy {
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

  // H.10: Injection de la source qui vient d'être créée
  // N.6: Ajout du param storeService tout juste réé
  constructor(
    private cartService: CartService,
    private storeService: StoreService
  ) {}

  // N.7: Déclaration des var nécessaires
  products: Array<Product> | undefined;
  sort = "desc"; //var pr le sorting des produits à afficher
  count = "12"; //var pr le nbre de produits à afficher
  productsSubscription: Subscription | undefined; //var pr contenir notre subscription et la détruire ult

  ngOnInit(): void {
    // N.9: Appel de la fn à l'initialisation du cpnt
    this.getProducts();
  }

  // N.8: Déclaration méthode getProducts
  getProducts(): void {
    this.productsSubscription = this.storeService
      .getAllProducts(this.count, this.sort)
      .subscribe((_products) => {
        this.products = _products;
      });
  }

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

  // H.11: Nouvelle méthode 'onAddToCart(product: Product)'
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

  // O.4: Nouvelle méthode lancée par l'event 'sortChange'
  onSortChange(newSort: string): void {
    this.sort = newSort;
    this.getProducts();
  }

  // P.4: Nouvelle méthode lancée par l'event 'itemsCountChange'
  onItemsCountChange(newCount: string): void {
    this.count = newCount;
    console.log(this.count);
    this.getProducts();
  }

  // N.14: Fn pr détruire la subscription ouverte et ainsi ne pas avoir de 'memory leaks'
  ngOnDestroy(): void {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
  }
}
