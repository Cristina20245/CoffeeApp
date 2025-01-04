import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoffeeService } from '../services/coffee.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-coffee-detail',
  standalone: true,
  templateUrl: './coffee-detail.component.html',
  styleUrls: ['./coffee-detail.component.css'],
  imports: [CommonModule],
})
export class CoffeeDetailComponent implements OnInit {
  coffee: any = {}; // Almacena los detalles del café
  coffeeId: number = 0; // ID del café seleccionado

  constructor(
    private route: ActivatedRoute,
    private coffeeService: CoffeeService
  ) {}

  ngOnInit(): void {
    // Obtener el ID del café de la URL
    this.coffeeId = +this.route.snapshot.paramMap.get('id')!;

    // Obtener los cafés desde la API usando el servicio
    this.coffeeService.getCoffees().subscribe((coffees) => {
      // Buscar el café con el ID correspondiente en la lista obtenida
      this.coffee = coffees.find((coffee) => coffee.id === this.coffeeId) || {};
    });
  }

  // Método para añadir el café al pedido
  addToOrder(): void {
    this.coffeeService.addToOrder(this.coffee);
    alert(`${this.coffee.title} añadido al pedido.`);
  }
}






/*import { Component } from '@angular/core';

@Component({
  selector: 'app-coffee-detail',
  imports: [],
  templateUrl: './coffee-detail.component.html',
  styleUrl: './coffee-detail.component.css'
})
export class CoffeeDetailComponent {

}*/
