// E.1
// Déclaration d'un nouveau component (pour les filtres)
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-filters",
  templateUrl: "filters.component.html",
})
export class FiltersComponent implements OnInit {
  // E.2
  // Déclaration d'un array pr les valeurs des filtres
  categories = ["Nespresso", "Senseo", "Dolce"];

  constructor() {}

  ngOnInit(): void {}
}
