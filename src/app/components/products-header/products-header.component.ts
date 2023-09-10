import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-products-header",
  //0.Create the new component (ng g componentName)
  //1.Add a new file named 'componentName.component.html
  //2.In it change 'template' to 'templateUrl'
  //3.Change its value to 'componentName.component.html'
  //4.Copy prop selector value, paste it to the appropriate component
  //(here, as example, into 'home.component.html')
  templateUrl: "products-header.component.html",
  styles: [],
})
export class ProductsHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
