import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CoffeeService } from '../services/coffee.service';

@Component({
  selector: 'app-add-coffee',
  standalone: true,
  templateUrl: './add-coffee.component.html',
  styleUrls: ['./add-coffee.component.css'],
  imports: [FormsModule, CommonModule]
})
export class AddCoffeeComponent implements OnInit {
  coffeeTitle: string = '';
  localCoffees: any[] = []; // ahora son objetos, no strings

  constructor(private coffeeService: CoffeeService) {}

  ngOnInit(): void {
    this.localCoffees = this.coffeeService.getLocalCoffees();
  }

  addCoffee(): void {
    if (this.coffeeTitle) {
      this.coffeeService.addLocalCoffee(this.coffeeTitle);
      this.localCoffees = this.coffeeService.getLocalCoffees();
      this.coffeeTitle = '';
    }
  }
}
