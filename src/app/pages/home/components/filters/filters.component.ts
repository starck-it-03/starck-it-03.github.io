// E.1
// Déclaration d'un nouveau component (pour les filtres)
import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import { Subscription } from "rxjs";
import { StoreService } from "src/app/services/store.service";

@Component({
  selector: "app-filters",
  templateUrl: "filters.component.html",
})

// Q.7: Ajout du OnDestroy
export class FiltersComponent implements OnInit, OnDestroy {
  // F.2
  // Déclaration d'un output 'showCategory'
  // de type EventEmitter attendant un string
  @Output() showCategory = new EventEmitter<string>();

  // E.2
  // Déclaration d'un array pr les valeurs des filtres

  // Q.4: Désinitialisation du tableau de string
  //categories = ["Nespresso", "Senseo", "Dolce"];
  categories: Array<string> | undefined;

  // Q.6: Var nécessaire pour killer la subscription à la fin
  categoriesSubscription: Subscription | undefined;

  // Q.2: Ajout include du storeService
  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    // Q.3: Call API à l'initialisation du composant
    this.getCategories();
  }

  // F.1
  // Fn pr l'émission d'un event vers le parent via output
  onShowCategory(category: string): void {
    // F.3
    // Emission de la valeur de la var 'category'
    this.showCategory.emit(category);
    console.log("Print from filters.component.ts (before output): " + category);
  }

  // Q.5: Appelle Fn call API définie dans storeService
  getCategories(): void {
    this.categoriesSubscription = this.storeService
      .getAllCategories()
      .subscribe((response) => {
        this.categories = response;
      });
  }
  // Q.8: Fn de destruction de la subscription si elle existe pr éviter les memory leaks
  ngOnDestroy(): void {
    if (this.categoriesSubscription) {
      this.categoriesSubscription.unsubscribe();
    }
  }
}
