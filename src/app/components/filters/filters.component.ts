// E.1
// Déclaration d'un nouveau component (pour les filtres)
import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-filters",
  templateUrl: "filters.component.html",
})
export class FiltersComponent implements OnInit {
  // F.2
  // Déclaration d'un output 'showCategory'
  // de type EventEmitter attendant un string
  @Output() showCategory = new EventEmitter<string>();

  // E.2
  // Déclaration d'un array pr les valeurs des filtres
  categories = ["Nespresso", "Senseo", "Dolce"];

  constructor() {}

  ngOnInit(): void {}

  // F.1
  // Fn pr l'émission d'un event vers le parent via output
  onShowCategory(category: string): void {
    // F.3
    // Logique à éxecuter lors de l'appel de la fn 'onShowCategory'
    this.showCategory.emit(category);
    console.log(
      "Print from filters.component.ts (before output): " + category
    );
  }
}
