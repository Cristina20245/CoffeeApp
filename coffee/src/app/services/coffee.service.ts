import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoffeeService {
  private apiUrl = 'https://api.sampleapis.com/coffee/hot'; // URL de la API (puedes seguir usándola si quieres)
  
  private coffees: any[] = []; // Lista de cafés (en memoria)
  private orders: any[] = []; // Lista de pedidos (en memoria)

  private localStorageKey = 'localCoffees'; // Clave para almacenar cafés locales en localStorage

  constructor(private http: HttpClient) {
    // Cargar los cafés desde localStorage (si existen)
    const savedCoffees = localStorage.getItem(this.localStorageKey);
    if (savedCoffees) {
      this.coffees = JSON.parse(savedCoffees);
    } else {
      // Si no hay cafés en localStorage, cargar desde la API
      this.loadCoffeesFromApi();
    }

    // Cargar los pedidos desde localStorage (si existen)
    const savedOrders = localStorage.getItem('orders');
    if (savedOrders) {
      this.orders = JSON.parse(savedOrders);
    }
  }

  // Método para obtener la lista de cafés locales desde localStorage
  getLocalCoffees(): string[] {
    const coffees = localStorage.getItem(this.localStorageKey);
    return coffees ? JSON.parse(coffees) : []; // Retorna la lista o un arreglo vacío si no hay datos
  }

  // Método para añadir un café local al localStorage
  addLocalCoffee(coffee: string): void {
    const currentCoffees = this.getLocalCoffees();
    currentCoffees.push(coffee);
    localStorage.setItem(this.localStorageKey, JSON.stringify(currentCoffees)); // Guardamos los cafés actualizados
  }

  // Obtener los cafés (desde localStorage o API)
  getCoffees(): any[] {
    return this.coffees;
  }

  // Obtener un café por ID
  getCoffeeById(id: number): any {
    return this.coffees.find((coffee) => coffee.id === id);
  }

  // Método para añadir un café al pedido
  addToOrder(coffee: any): void {
    this.orders.push(coffee);
    this.updateLocalStorage('orders', this.orders); // Actualizar pedidos en localStorage
  }

  // Obtener todos los pedidos
  getOrders(): any[] {
    return this.orders;
  }

  // Cargar cafés desde la API y guardarlos en localStorage
  private loadCoffeesFromApi(): void {
    this.http.get<any[]>(this.apiUrl).subscribe((data) => {
      this.coffees = data; // Guardar los cafés obtenidos en memoria
      this.updateLocalStorage(this.localStorageKey, this.coffees); // Guardar los cafés en localStorage
    });
  }

  // Método privado para actualizar localStorage
  private updateLocalStorage(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data)); // Guardar los datos en localStorage
  }
}



/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoffeeService {
  private apiUrl = 'https://api.sampleapis.com/coffee/hot'; // URL de la API

  //NUEVO
  private coffees: any[] = []; // Lista de cafés (obtenida de la API)
  private orders: any[] = []; // Lista de pedidos

  constructor(private http: HttpClient) {}

  // Método para obtener la lista de cafés retorna un Observable
  getCoffees(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Método para obtener un café por ID
  getCoffeeById(id: number): any {
    return this.coffees.find((coffee) => coffee.id === id);
  }

  // Métodos para gestionar pedidos
  addToOrder(coffee: any): void {
    this.orders.push(coffee);
  }

  getOrders(): any[] {
    return this.orders;
  }
}*/







/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  constructor() { }
}*/
