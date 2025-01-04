import { Component, OnInit } from '@angular/core';
import { CoffeeService } from '../services/coffee.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // Para navegar entre rutas
import { RouterModule } from '@angular/router'; // Necesario para las rutas

@Component({
  selector: 'app-coffee-list',
  standalone: true, // Define este componente como standalone
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css'],
  imports: [CommonModule, RouterModule], // Importa módulos necesarios para *ngFor, *ngIf y rutas
})
export class CoffeeListComponent implements OnInit {
  // Lista inicial de cafés con sus detalles
  coffees = [
    { id: 1, title: 'Black Coffee', description: '...', image: '...', ingredients: ['Coffee'] },
    { id: 2, title: 'Latte', description: '...', image: '...', ingredients: ['Espresso', 'Ångad mjölk'] },
    { id: 3, title: 'Caramel Latte', description: '...', image: '...', ingredients: ['Espresso', 'Ångad mjölk', 'Karamellsirap'] },
    { id: 4, title: 'Cappuccino', description: '...', image: '...', ingredients: ['Espresso', 'Ångad mjölk', 'Foam'] },
    { id: 5, title: 'Americano', description: '...', image: '...', ingredients: ['Espresso', 'Hett vatten'] },
    { id: 6, title: 'Espresso', description: '...', image: '...', ingredients: ['Espresso'] }
  ]; // Lista de cafés completos obtenidos desde la API
  localCoffees: string[] = []; // Arreglo para los cafés locales (solo títulos)

  constructor(private coffeeService: CoffeeService, private router: Router) {}

  ngOnInit(): void {
    // Obtener los cafés completos desde la API al inicializar el componente
    this.coffeeService.getCoffees().subscribe((data) => {
      this.coffees = data; // Asignar los datos obtenidos de la API a la lista de cafés
    });

    // Obtener la lista de cafés locales almacenados en localStorage
    this.localCoffees = this.coffeeService.getLocalCoffees(); // Llamar al servicio para obtener los cafés locales
  }

  // Método para navegar a la página de detalles de un café específico
  goToDetails(coffeeId: number): void {
    // Navega a la ruta de detalles del café pasando el ID correspondiente
    this.router.navigate(['/menu', coffeeId]);
  }

  // Propiedad calculada para filtrar los cafés locales
  get filteredLocalCoffees() {
    // Filtra los cafés locales excluyendo los primeros 20 elementos
    return this.localCoffees.filter((_, index) => index > 19);
  }
}
