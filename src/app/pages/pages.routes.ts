import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuardGuard } from '../services/service.index';


const pagesRoutes: Routes = [

    {
        path: '', // Si es vacío redirecciona a : 'PagesComponent' // data: { titulo: 'Progress' } Para la data que quiera en mis paginas
        component: PagesComponent,
        canActivate: [LoginGuardGuard],  // Implemento mi LoginGuard
        children:  [
           {path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },  // Rutas hijas
           {path: 'progress', component: ProgressComponent, data: { titulo: 'Progress' }},
           {path: 'graficas1', component: Graficas1Component, data: { titulo: 'Gráficas' }},
           {path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' }},
           {path: 'rxjs', component: RxjsComponent, data: { titulo: 'Rxjs' }},
           {path: 'account-settings', component: AccoutSettingsComponent, data: { titulo: 'Ajustes del tema' }},
           {path: '', redirectTo: '/dashboard', pathMatch: 'full'}, // Si es vacío redirecciona a : '/dashboard'
        ]
     },
    ];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes); // Por que son rutas hijas
