import { CanActivateFn } from '@angular/router';

export const permissionsGuard: CanActivateFn = (route, state) => {
  
  // Simulación de verificación de permisos
  if (isBarista()) {
    return true;
  }
  
  alert('You are not authorized to access this page.');
  return false;

  // Esta es la función que simula la verificación de permisos
  function isBarista(): boolean {
    return false; // Aquí puedes cambiar la lógica para que verifique si el usuario tiene el rol 'barista'
  }
};
