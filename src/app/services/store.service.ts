// N.1: Création d'un nouveau service 'store' via 'ng g s store'
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { Product } from "../models/product.models";

// N.4: Déclaration d'une const pr l'adresse de base de l'API
const STORE_BASE_URL = "https://fakestoreapi.com";

@Injectable({
  providedIn: "root",
})
export class StoreService {
  // N.3: Import du client HTTP nécessaire au fetch des datas
  constructor(private httpClient: HttpClient) {}

  // N.5: Déclaration fn pour getAllProducts avec 2 params
  // limit = 12, 24 ou 36
  // sort = desc ou asc
  getAllProducts(limit = "12", sort = "desc"): Observable<Array<Product>> {
    return this.httpClient.get<Array<Product>>(
      `${STORE_BASE_URL}/products?sort=${sort}&limit=${limit}`
      // Attention: l'url doit être entre `` et non entre '' ou ""
    );
  }
}
