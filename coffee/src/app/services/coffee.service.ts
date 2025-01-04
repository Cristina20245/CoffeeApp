import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoffeeService {
  private apiUrl = 'https://api.sampleapis.com/coffee/hot'; // URL de la API
  private localStorageKey = 'localCoffees'; // Clave para almacenar cafés locales en localStorage
  private orders: any[] = []; // Lista de pedidos (en memoria)
  private localCoffees: string[] = []; // Lista para almacenar cafés locales (títulos)

  constructor(private http: HttpClient) {
    // Cargar los cafés desde localStorage (si existen)
    const savedCoffees = localStorage.getItem(this.localStorageKey);
    if (savedCoffees) {
      this.localCoffees = JSON.parse(savedCoffees); // Cargar cafés locales guardados
    }

    // Cargar los pedidos desde localStorage (si existen)
    const savedOrders = localStorage.getItem('orders');
    if (savedOrders) {
      this.orders = JSON.parse(savedOrders);
    }
  }

  // Método para obtener la lista de cafés locales desde localStorage
  getLocalCoffees(): string[] {
    return this.localCoffees; // Devuelve los cafés locales
  }

  // Método para añadir un café a la lista de cafés locales y guardarlo en localStorage
  addLocalCoffee(coffee: string): void {
    this.localCoffees.push(coffee); // Añade el café a la lista local
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.localCoffees)); // Guarda en localStorage
  }

  // Método para obtener los cafés completos desde la API
  getCoffees(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl); // Retorna los cafés desde la API
  }

  // Obtener un café por ID de la API
  getCoffeeById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`); // Método para obtener un café específico por ID
  }

  // Método para añadir un café al pedido
  addToOrder(coffee: any): void {
    this.orders.push(coffee);
    this.updateLocalStorage('orders', this.orders); // Actualiza los pedidos en localStorage
  }

  // Obtener todos los pedidos
  getOrders(): any[] {
    return this.orders;
  }

  // Método privado para actualizar localStorage
  private updateLocalStorage(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data)); // Guarda los datos en localStorage
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
