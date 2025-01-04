import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Nuevo para formularios
import { CommonModule } from '@angular/common';
import { CoffeeService } from '../services/coffee.service';

@Component({
  selector: 'app-add-coffee',
  standalone: true,
  templateUrl: './add-coffee.component.html',
  styleUrls: ['./add-coffee.component.css'],
  imports: [FormsModule, CommonModule]  // Agrega FormsModule en el array de 'imports'
})
export class AddCoffeeComponent {
  coffeeTitle: string = ''; // Almacena el título del café
  localCoffees: string[] = []; // Lista local de cafés
  
  constructor(private coffeeService: CoffeeService) {}

  // Método para añadir café personalizado a la lista local
  addCoffee(): void {
    if (this.coffeeTitle) {
      this.coffeeService.addLocalCoffee(this.coffeeTitle); // Añadir al servicio
      this.coffeeTitle = ''; // Limpiar el campo de entrada
    }
  }
}






/*import { Component } from '@angular/core';

@Component({
  selector: 'app-add-coffee',
  imports: [],
  templateUrl: './add-coffee.component.html',
  styleUrl: './add-coffee.component.css'
})
export class AddCoffeeComponent {

}*/
