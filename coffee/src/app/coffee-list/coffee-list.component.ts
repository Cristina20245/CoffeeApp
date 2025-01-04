import { Component, OnInit } from '@angular/core';
import { CoffeeService } from '../services/coffee.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // Para navegar entre rutas
import { RouterModule } from '@angular/router'; // Necesario para las rutas

@Component({
  selector: 'app-coffee-list',
  standalone: true, // Componente standalone
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css'],
  imports: [CommonModule, RouterModule], // Para *ngFor, *ngIf y rutas
})
export class CoffeeListComponent implements OnInit {
  coffees = [
    { id: 1, title: 'Black Coffee', description: '...', image: '...', ingredients: ['Coffee'] },
    { id: 2, title: 'Latte', description: '...', image: '...', ingredients: ['Espresso', 'Ångad mjölk'] },
    { id: 3, title: 'Caramel Latte', description: '...', image: '...', ingredients: ['Espresso', 'Ångad mjölk', 'Karamellsirap'] },
    { id: 4, title: 'Cappuccino', description: '...', image: '...', ingredients: ['Espresso', 'Ångad mjölk', 'Foam'] },
    { id: 5, title: 'Americano', description: '...', image: '...', ingredients: ['Espresso', 'Hett vatten'] },
    { id: 6, title: 'Espresso', description: '...', image: '...', ingredients: ['Espresso'] }
  ]; // Lista de cafés completos obtenidos desde la API
  localCoffees: string[] = []; // Arreglo para los cafés locales (títulos de cafés)

  constructor(private coffeeService: CoffeeService, private router: Router) {}

  ngOnInit(): void {
    // Obtener los cafés desde la API
    this.coffeeService.getCoffees().subscribe((data) => {
      this.coffees = data; // Obtener cafés completos desde la API
    });

    // Obtener los cafés locales
    this.localCoffees = this.coffeeService.getLocalCoffees(); // Obtener cafés locales desde el servicio
  }

  // Método para navegar a la página de detalles del café
  goToDetails(coffeeId: number): void {
    // Navegar al detalle del café pasando el id
    this.router.navigate(['/menu', coffeeId]);
  }

// Método para filtrar los cafés locales que no están en `coffees`
get filteredLocalCoffees() {
  // Filtra por nombre y asegura que no exista un café con el mismo nombre en `coffees`
  return this.localCoffees.filter(localCoffee => 
    !this.coffees.some(coffee => coffee.title === localCoffee)
  );
}

}




/*import { Component } from '@angular/core';

@Component({
  selector: 'app-coffee-list',
  imports: [],
  templateUrl: './coffee-list.component.html',
  styleUrl: './coffee-list.component.css'
})
export class CoffeeListComponent {

}*/
