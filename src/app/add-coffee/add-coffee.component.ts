import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Nuevo para formularios
import { CommonModule } from '@angular/common';
import { CoffeeService } from '../services/coffee.service';

@Component({
  selector: 'app-add-coffee',
  standalone: true, // Este es un componente independiente en Angular
  templateUrl: './add-coffee.component.html', // Archivo HTML del componente
  styleUrls: ['./add-coffee.component.css'], // Archivo CSS del componente
  imports: [FormsModule, CommonModule]  // Agrega FormsModule en el array de 'imports' para trabajar con formularios y funcionalidades comunes
})
export class AddCoffeeComponent {
  coffeeTitle: string = ''; // Almacena el título del café que se desea agregar
  localCoffees: string[] = []; // Lista local de cafés para mostrar en el formulario
  
  constructor(private coffeeService: CoffeeService) {} // Inyección del servicio CoffeeService

  // Método para añadir café personalizado a la lista local
  addCoffee(): void {
    if (this.coffeeTitle) { // Verifica que haya un título válido
      this.coffeeService.addLocalCoffee(this.coffeeTitle); // Añadir el café al servicio
      this.coffeeTitle = ''; // Limpiar el campo de entrada después de añadir el café
    }
  }
}

