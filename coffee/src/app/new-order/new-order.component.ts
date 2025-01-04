import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoffeeService } from '../services/coffee.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-order',
  imports: [FormsModule, CommonModule],
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {
  orders: any[] = [];
  newOrderDetails: string = ''; // Para almacenar los detalles del nuevo pedido

  constructor(private coffeeService: CoffeeService) {}

  ngOnInit(): void {
    this.orders = this.coffeeService.getOrders(); // Cargar los pedidos existentes al inicio
  }

  // Función para agregar un nuevo pedido
  addOrder(): void {
    if (this.newOrderDetails.trim()) {
      const newOrder = {
        title: this.newOrderDetails,
        image: '', // Puedes agregar una imagen si lo deseas
      };
      this.coffeeService.addOrder(newOrder); // Llamar al servicio para agregar el pedido
      this.newOrderDetails = ''; // Limpiar el formulario
      this.orders = this.coffeeService.getOrders(); // Actualizar la lista de pedidos
    } else {
      alert('Please enter valid order details.');
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
