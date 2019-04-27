import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NopaguefoundComponent } from './shared/nopaguefound/nopaguefound.component';




/* Declaro mi archivo de rutas*/

const appRoutes: Routes = [
   {path: 'login', component: LoginComponent},
   {path: 'register', component: RegisterComponent},

   {path: '**', component: NopaguefoundComponent}
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true });
// Declaro mi arreglo de rutas: "appRoutes"
// Defino mis rutas principales
