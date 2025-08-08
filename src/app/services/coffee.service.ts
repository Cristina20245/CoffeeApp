import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoffeeService {
  private apiUrl = 'https://api.sampleapis.com/coffee/hot'; // URL de la API para obtener datos de cafés
  private localStorageKey = 'localCoffees'; // Clave para almacenar la lista de cafés locales en localStorage
  private ordersKey = 'orders'; // Clave para almacenar la lista de pedidos en localStorage
  private orders: any[] = []; // Arreglo para almacenar pedidos en memoria
  private localCoffees: string[] = []; // Arreglo para almacenar títulos de cafés locales

  constructor(private http: HttpClient) {
    // Cargar datos de cafés locales desde localStorage, si existen
    const savedCoffees = localStorage.getItem(this.localStorageKey);
    if (savedCoffees) {
      this.localCoffees = JSON.parse(savedCoffees); // Convertir el JSON almacenado en un arreglo de cadenas
    }

    // Cargar datos de pedidos desde localStorage, si existen
    const savedOrders = localStorage.getItem(this.ordersKey);
    if (savedOrders) {
      this.orders = JSON.parse(savedOrders); // Convertir el JSON almacenado en un arreglo de objetos
    }
  }

  // Obtener la lista de cafés locales desde localStorage
  getLocalCoffees(): string[] {
    return this.localCoffees; // Devolver la lista de títulos de cafés locales
  }

  // Añadir un nuevo café a la lista local y actualizar localStorage
  addLocalCoffee(coffee: string): void {
    this.localCoffees.push(coffee); // Añadir el nuevo café a la lista local
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.localCoffees)); // Guardar la lista actualizada en localStorage
  }

  // Obtener la lista completa de cafés desde la API
  getCoffees(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl); // Hacer una solicitud GET a la API y devolver los datos como un Observable
  }

  // Obtener detalles de un café específico usando su ID desde la API
  getCoffeeById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`); // Hacer una solicitud GET con el ID específico y devolver los datos
  }

  // Añadir un nuevo pedido a la lista de pedidos y actualizar localStorage
  addOrder(order: any): void {
    this.orders.push(order); // Añadir el nuevo pedido a la lista en memoria
    this.updateLocalStorage(this.ordersKey, this.orders); // Actualizar localStorage con la lista de pedidos actualizada
  }

  // Obtener todos los pedidos almacenados en memoria
  getOrders(): any[] {
    return this.orders; // Devolver la lista actual de pedidos
  }

  // Método privado para actualizar localStorage con una clave y datos específicos
  private updateLocalStorage(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data)); // Convertir los datos a JSON y almacenarlos en localStorage bajo la clave dada
  }
}
