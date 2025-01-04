import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router'; // Para las rutas

@Component({
  selector: 'app-root',
  imports: [RouterModule, RouterOutlet], // Asegúrate de incluirlo en imports
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'coffee';
}


/*import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddCoffeeComponent } from './add-coffee/add-coffee.component';
import { CoffeeListComponent } from "./coffee-list/coffee-list.component";
import { CoffeeDetailComponent } from "./coffee-detail/coffee-detail.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddCoffeeComponent, CoffeeListComponent, CoffeeDetailComponent], // Asegúrate de incluirlo en imports
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'coffee';
}*/