import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Para acceder a los parámetros de la ruta
import { CoffeeService } from '../services/coffee.service'; // Para interactuar con el servicio de cafés
import { CommonModule } from '@angular/common'; // Módulo común necesario para el componente

@Component({
  selector: 'app-coffee-detail',
  standalone: true, // Componente independiente
  templateUrl: './coffee-detail.component.html',
  styleUrls: ['./coffee-detail.component.css'],
  imports: [CommonModule], // Importa el módulo común
})
export class CoffeeDetailComponent implements OnInit {
  coffee: any = {}; // Almacena los detalles del café seleccionado
  coffeeId: number = 0; // ID del café seleccionado, que se obtiene de la URL

  constructor(
    private route: ActivatedRoute, // Inyecta ActivatedRoute para obtener parámetros de la URL
    private coffeeService: CoffeeService // Inyecta el servicio de cafés para interactuar con la API
  ) {}

  ngOnInit(): void {
    // Obtener el ID del café desde los parámetros de la URL
    this.coffeeId = +this.route.snapshot.paramMap.get('id')!;

    // Obtener la lista de cafés desde el servicio (API)
    this.coffeeService.getCoffees().subscribe((coffees) => {
      // Busca el café correspondiente al ID obtenido
      this.coffee = coffees.find((coffee) => coffee.id === this.coffeeId) || {};
    });
  }

  // Método para añadir el café actual al pedido
  addToOrder(): void {
    this.coffeeService.addOrder(this.coffee); // Añadir el café al pedido usando el servicio
    alert(`${this.coffee.title} añadido al pedido.`); // Mostrar un mensaje de confirmación al usuario
  }
}



