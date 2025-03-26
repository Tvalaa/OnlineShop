import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'cart', component: CartComponent},
    { path: 'product/:id', component: ProductDetailsComponent},
    { path: 'auth', component: AuthComponent}
];
