import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { LoginPage } from '../login/login.page';

import { ProductsPage } from '../products/products.page';
import { ProductlistPage } from '../productlist/productlist.page';


const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
{
    path: 'login',
    component: LoginPage,
  },

  {
    path: 'productslist',
    component: ProductlistPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
