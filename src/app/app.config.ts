import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router'; // Proveedor para configurar el enrutamiento de la aplicación
import { provideHttpClient } from '@angular/common/http'; // Proveedor para manejar las solicitudes HTTP en la aplicación
import { FormsModule } from '@angular/forms'; // Módulo necesario para usar ngModel en los formularios
import { routes } from './app.routes'; // Importación de las rutas definidas en app.routes.ts

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // Configuración para optimizar la detección de cambios en Angular
    provideRouter(routes), // Configuración del enrutador con las rutas definidas
    provideHttpClient(),    // Habilitación del cliente HTTP para hacer solicitudes
    FormsModule,            // Inclusión de FormsModule para manejar formularios y ngModel
  ]
};
