import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Nuevo para formularios
import { CommonModule } from '@angular/common';

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

  addCoffee(): void {
    if (this.coffeeTitle) {
      // Añadir el café a la lista
      this.localCoffees = [...this.localCoffees, this.coffeeTitle];
      this.coffeeTitle = ''; // Limpiar el campo de texto
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
