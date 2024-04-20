import { Routes } from '@angular/router';
import { HomePage } from '../modules/home/page/home-page';
import { LoginPage } from '../modules/login/pages/signin/login-page';
import { SearchPage } from '../modules/search/page/search-page';
import { ProductDetailsPage } from '../modules/product-details/page/product-details-page';
import { CheckoutPage } from '../modules/checkout/page/checkout-page';
import { SignupPage } from '../modules/login/pages/signup/signup-page';
import { NotFoundPage } from '../modules/shared/pages/not-found/not-found-page';

export const routes: Routes = [
    { path: '', component: HomePage },
    { path: 'signin', component: LoginPage },
    { path: 'signup', component: SignupPage },
    { path: 'search/:query', component: SearchPage },
    { path: 'product/:id', component: ProductDetailsPage },
    { path: 'checkout/:id', component: CheckoutPage },
    { path: 'not_found', component: NotFoundPage }
];


