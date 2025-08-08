import { CanActivateFn } from '@angular/router';

// Guard de permisos que se utiliza para proteger rutas específicas
export const permissionsGuard: CanActivateFn = (route, state) => {
  
  // Simulación de verificación de permisos
  if (isBarista()) { // Verifica si el usuario tiene permisos
    return true; // Permite el acceso si la verificación es positiva
  }
  
  // Muestra una alerta si el usuario no tiene permisos
  alert('You are not authorized to access this page.');
  return false; // Niega el acceso si la verificación falla

  // Función auxiliar que simula la verificación de permisos
  function isBarista(): boolean {
    return true; // Simulación de lógica de verificación de rol 'barista'. True si el usuario es barista, false en caso contrario
  }
};
