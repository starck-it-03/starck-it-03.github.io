import { Component, EventEmitter, OnInit, Output } from "@angular/core";
// D.4
// Import nécessaire à l'utilisation d'output via ajout 'Output'(e) les {}

@Component({
  selector: "app-products-header",
  // 0.Create the new component (ng g componentName)
  // 1.Add a new file named 'componentName.component.html
  // 2.In it change 'template' to 'templateUrl'
  // 3.Change its value to 'componentName.component.html'
  // 4.Copy prop selector value, paste it to the appropriate component
  // (here, as example, into 'home.component.html')
  templateUrl: "products-header.component.html",
  styles: [],
})
export class ProductsHeaderComponent implements OnInit {
  // D.5
  // Déclaration de l'output 'columnsCountChange'(TBC)
  @Output() columnsCountChange = new EventEmitter<number>();
  // A.3
  // Déclaration de la var pr le menu sorting et initialisation à 'desc'
  sort = "desc";
  // B.3
  // Déclaration de la var pr le menu rows qty items et initialisation à 12
  itemsShowCount = 12;
  // C.2
  // Déclaration de la var pr le menu column qty items et initialisation à 3
  colsNum = 3;
  constructor() {}

  ngOnInit(): void {}

  // A.4
  // Déclaration de la fn pr changer la valeur de variable 'sort'
  onSortUpdated(newSort: string): void {
    this.sort = newSort;
    console.log(newSort);
  }
  // B.4
  // Déclaration de la fn pr changer la valeur de variable 'itemsShowCount'
  onItemsUpdated(count: number): void {
    this.itemsShowCount = count;
    console.log(count);
  }
  // D.6
  // Déclaration de la fn 'onColumnsUpdated' pr changer la valeur de l'output 'columnsCountChange'
  onColumnsUpdated(colsNum: number): void {
    this.columnsCountChange.emit(colsNum);
    console.log(
      "Print from products-header.component.ts (before output): " + colsNum
    );
  }
}
