import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ProductsListComponent} from './components/products/products-list.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {InfoComponent} from './components/info/info.component';


const routes: Routes = [
  {
    path: '/',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductsListComponent
  },
  {
    path: 'info',
    component: InfoComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
