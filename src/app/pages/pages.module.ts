import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';

// ng2-charts
import { ChartsModule } from 'ng2-charts';

import {FormsModule} from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';


// Modulo de paginas principales

// Temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';


@NgModule({

    declarations: [
        PagesComponent,
       DashboardComponent,
       ProgressComponent,
       Graficas1Component,
       IncrementadorComponent,
       GraficoDonaComponent,
       AccoutSettingsComponent
    ],
exports: [
       DashboardComponent,
       ProgressComponent,
       Graficas1Component
   ],
  imports: [
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule
  ]
})

export class PagesModule { }