import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoffeeService {
  private apiUrl = 'https://api.sampleapis.com/coffee/hot';
  private localStorageKey = 'localCoffees';
  private ordersKey = 'orders';
  private orders: any[] = [];
  private localCoffees: any[] = [];

  private defaultImage = 'assets/images/default-preview.jpg';

  constructor(private http: HttpClient) {
    const savedCoffees = localStorage.getItem(this.localStorageKey);
    if (savedCoffees) {
      this.localCoffees = JSON.parse(savedCoffees);
    }

    const savedOrders = localStorage.getItem(this.ordersKey);
    if (savedOrders) {
      this.orders = JSON.parse(savedOrders);
    }
  }

  // ✅ Añadir un café local siempre con imagen por defecto
  addLocalCoffee(coffeeTitle: string): void {
    const newCoffee = {
      title: coffeeTitle,
      image: this.defaultImage, // siempre asigna esta imagen
    };
    this.localCoffees.push(newCoffee);
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.localCoffees));
  }

// ✅ Obtener cafés locales
getLocalCoffees(): { title: string; image: string }[] {
  return this.localCoffees;
}

  // ✅ Obtener cafés de la API (sin forzar imagen por defecto)
  getCoffees(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Pedidos
  addOrder(order: any): void {
    this.orders.push(order);
    this.updateLocalStorage(this.ordersKey, this.orders);
  }

  getOrders(): any[] {
    return this.orders;
  }

  private updateLocalStorage(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }
}

