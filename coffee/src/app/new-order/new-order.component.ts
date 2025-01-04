import { Component,OnInit } from '@angular/core';
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
}
