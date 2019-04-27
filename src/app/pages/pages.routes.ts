import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

const pagesRoutes: Routes = [

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
    ];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes); // Por que son rutas hijas
