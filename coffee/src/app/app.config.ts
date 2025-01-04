import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router'; // Proveedor para el enrutamiento
import { provideHttpClient } from '@angular/common/http'; // Proveedor para manejar solicitudes HTTP
import { FormsModule } from '@angular/forms'; // Necesario para ngModel
import { routes } from './app.routes'; // Rutas definidas en app.routes.ts

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), // Agregar las rutas para el enrutamiento
    provideHttpClient(),    // Para manejar solicitudes HTTP
    FormsModule,            // Agregar FormsModule para usar ngModel en los formularios
  ]
};
