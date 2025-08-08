import { Routes } from '@angular/router';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { CoffeeDetailComponent } from './coffee-detail/coffee-detail.component';
import { AddCoffeeComponent } from './add-coffee/add-coffee.component';
import { NewOrderComponent } from './new-order/new-order.component'; 
import { permissionsGuard } from './guards/permissions.guard';

export const routes: Routes = [
  { path: 'menu', component: CoffeeListComponent }, // Ruta para la lista de cafés
  { path: 'menu/:id', component: CoffeeDetailComponent }, // Ruta para mostrar los detalles de un café específico
  { path: 'add-coffee', component: AddCoffeeComponent }, // Ruta para la página de agregar un nuevo café
  { path: '', redirectTo: 'menu', pathMatch: 'full' }, // Redirección de la ruta raíz al menú de cafés
  { path: 'new-order', component: NewOrderComponent, canActivate: [permissionsGuard] }, // Protegida por el guard de permisos
];
