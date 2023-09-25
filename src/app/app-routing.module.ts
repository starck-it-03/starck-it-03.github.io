import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { CartComponent } from "./pages/cart/cart.component";

const routes: Routes = [
  {
    //Avec le path home,
    path: "home",
    //charger le componsant HomeComponent
    component: HomeComponent,
  },
  {
    //Avec le path home,
    path: "cart",
    //charger le componsant HomeComponent
    component: CartComponent,
  },
  {
    // Si chemin vide, alors redirige vers page home
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
