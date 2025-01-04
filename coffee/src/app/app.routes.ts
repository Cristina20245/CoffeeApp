import { Routes } from '@angular/router';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { CoffeeDetailComponent } from './coffee-detail/coffee-detail.component';
import { AddCoffeeComponent } from './add-coffee/add-coffee.component';
import { NewOrderComponent } from './new-order/new-order.component'; // NUEVO COMPONENTE

export const routes: Routes = [
  { path: 'menu', component: CoffeeListComponent }, // Ruta para la lista de cafés
  { path: 'menu/:id', component: CoffeeDetailComponent }, // Ruta para los detalles del café
  { path: 'add-coffee', component: AddCoffeeComponent }, // Ruta para agregar un café
  { path: '', redirectTo: 'menu', pathMatch: 'full' }, // Redirigir la raíz a /menu
  { path: 'new-order', component: NewOrderComponent }, // NUEVA RUTA PARA PEDIDOS
];





/*import { Routes } from '@angular/router';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { CoffeeDetailComponent } from './coffee-detail/coffee-detail.component';
import { AddCoffeeComponent } from './add-coffee/add-coffee.component';  // Asegúrate de importar el componente

export const routes: Routes = [
  { path: '', component: CoffeeListComponent },  // Ruta para la lista de cafés
  { path: 'coffee/:id', component: CoffeeDetailComponent },  // Ruta para los detalles de un café
  { path: 'add-coffee', component: AddCoffeeComponent },  // Ruta para agregar un café
];
*/


// SEGUNDO
/*import { Routes } from '@angular/router';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';

export const routes: Routes = [
  { path: '', component: CoffeeListComponent }, // Ruta predeterminada
];*/





// PRIMERO
/*import { Routes } from '@angular/router';

export const routes: Routes = [];*/
