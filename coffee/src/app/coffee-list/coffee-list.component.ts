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
  coffees: any[] = []; // Lista de cafés completos obtenidos desde localStorage o API
  localCoffees: string[] = []; // Arreglo para los cafés locales (títulos de cafés)

  constructor(private coffeeService: CoffeeService, private router: Router) {}

  ngOnInit(): void {
    // Obtener los cafés completos desde el servicio (y localStorage)
    this.coffees = this.coffeeService.getCoffees(); // Obtener cafés completos desde localStorage o API
    
    // Obtener los cafés locales (solo títulos) desde localStorage
    this.localCoffees = this.coffeeService.getLocalCoffees(); // Obtener títulos de cafés desde localStorage
  }

  // Método para navegar a la página de detalles del café
  goToDetails(coffeeId: number): void {
    // Redirige a la página de detalles usando la nueva ruta /menu/:id
    this.router.navigate(['/menu', coffeeId]);
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
