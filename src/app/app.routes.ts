import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NopaguefoundComponent } from './shared/nopaguefound/nopaguefound.component';
import { PagesComponent } from './pages/pages.component';



/* Declaro mi archivo de rutas*/

const appRoutes: Routes = [
   {
      path: '', // Si es vacío redirecciona a : 'PagesComponent'
      component: PagesComponent,
      children:  [
         {path: 'dashboard', component: DashboardComponent},  // Rutas hijas
         {path: 'progress', component: ProgressComponent},
         {path: 'graficas1', component: Graficas1Component},
         {path: '', redirectTo: '/dashboard', pathMatch: 'full'}, // Si es vacío redirecciona a : '/dashboard'
      ]
   },
   {path: 'login', component: LoginComponent},
   {path: 'register', component: RegisterComponent},

   {path: '**', component: NopaguefoundComponent}
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true });
// Declaro mi arreglo de rutas: "appRoutes"
// Defino mis rutas principales
