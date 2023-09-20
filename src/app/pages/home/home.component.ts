import { Component, OnInit } from "@angular/core";

@Component({
  // ng g c home: ng genrate component home
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
  // D.1
  // Déclaration de la var 'cols' dans le composant principale et initialisation à 3
  cols = 3;

  // F.7
  // Déclaration de la var 'category' dans le cpnt principal et non-initialisation (=> undefined obligatoire)
  category: string | undefined;

  constructor() {}

  ngOnInit(): void {}

  // D.3
  // Déclaration de la fn 'onColumnsCountChange' pr MaJ de la var 'cols'
  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
    console.log("Print from home.component.ts (post output): " + this.cols);
  }

  // F.6
  // Déclaration de la fn 'onShowCategory' pr MaJ de la var 'category'
  onShowCategory(newCategory: string): void {
    this.category = "Active filter: " + newCategory;
    console.log("Print from home.component.ts (post output): " + this.category);
  }
}
