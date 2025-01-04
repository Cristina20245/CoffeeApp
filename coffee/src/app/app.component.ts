import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // RouterOutlet permite la visualización de componentes basados en rutas
import { RouterModule } from '@angular/router'; // Importación necesaria para manejar las rutas en la aplicación

@Component({
  selector: 'app-root', // Selector para el componente raíz de la aplicación
  imports: [RouterModule, RouterOutlet], // Asegúrate de incluir RouterModule y RouterOutlet en imports para manejar el enrutamiento
  templateUrl: './app.component.html', // Ruta del archivo de plantilla HTML
  styleUrl: './app.component.css' // Ruta del archivo de estilos CSS
})
export class AppComponent {
  title = 'coffee'; // Título de la aplicación, utilizado en la plantilla
}
