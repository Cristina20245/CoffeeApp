import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Módulo para manejar formularios
import { CoffeeService } from '../services/coffee.service'; // Servicio para manejar la lógica de los cafés y pedidos
import { CommonModule } from '@angular/common'; // Módulo común de Angular

@Component({
  selector: 'app-new-order', // Selector del componente utilizado en la plantilla
  imports: [FormsModule, CommonModule], // Importar módulos necesarios para el funcionamiento del componente
  templateUrl: './new-order.component.html', // Ruta del archivo de plantilla HTML
  styleUrls: ['./new-order.component.css'] // Ruta del archivo de estilos CSS
})
export class NewOrderComponent implements OnInit {
  orders: any[] = []; // Arreglo para almacenar los pedidos
  newOrderDetails: string = ''; // Variable para capturar los detalles del nuevo pedido

  constructor(private coffeeService: CoffeeService) {} // Inyección del servicio CoffeeService

  ngOnInit(): void {
    this.orders = this.coffeeService.getOrders(); // Cargar la lista de pedidos existentes al inicializar el componente
  }

  // Método para agregar un nuevo pedido a la lista
  addOrder(): void {
    if (this.newOrderDetails.trim()) { // Verificar que los detalles del pedido no estén vacíos
      const newOrder = {
        title: this.newOrderDetails, // Asignar el título del nuevo pedido
        image: '', // Campo para una imagen, opcional
      };
      this.coffeeService.addOrder(newOrder); // Llamar al servicio para agregar el nuevo pedido
      this.newOrderDetails = ''; // Limpiar el campo de entrada después de agregar el pedido
      this.orders = this.coffeeService.getOrders(); // Actualizar la lista de pedidos
    } else {
      alert('Please enter valid order details.'); // Mostrar alerta si los detalles del pedido están vacíos
    }
  }
}







/*import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoffeeService } from '../services/coffee.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-order',
  imports: [FormsModule, CommonModule],
  templateUrl: './new-order.component.html',
  styleUrl: './new-order.component.css'
})
export class NewOrderComponent implements OnInit {
  orders: any[] = [];

  constructor(private coffeeService: CoffeeService) {}

  ngOnInit(): void {
    this.orders = this.coffeeService.getOrders();
  }
}*/
