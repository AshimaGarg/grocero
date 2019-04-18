import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'orders', loadChildren: './orders/orders.module#OrdersPageModule' },
  { path: 'notification', loadChildren: './notification/notification.module#NotificationPageModule' },
  { path: 'cart', loadChildren: './cart/cart.module#CartPageModule' },
  { path: 'account', loadChildren: './account/account.module#AccountPageModule' },
  { path: 'personal', loadChildren: './personal/personal.module#PersonalPageModule' },  { path: 'household', loadChildren: './household/household.module#HouseholdPageModule' },
  { path: 'babycare', loadChildren: './babycare/babycare.module#BabycarePageModule' },
  { path: 'snacks', loadChildren: './snacks/snacks.module#SnacksPageModule' },
  { path: 'kitchen', loadChildren: './kitchen/kitchen.module#KitchenPageModule' },


  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
