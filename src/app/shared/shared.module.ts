import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NopaguefoundComponent } from './nopaguefound/nopaguefound.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

// Pipes Modulo
import { PipesModule } from '../pipes/pipes.module';



// Paginas  compartidas a lo largo de la APP

@NgModule({
   imports: [
     RouterModule,
     CommonModule,
     PipesModule
   ],
  declarations: [
    NopaguefoundComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
  ],
  exports: [
    NopaguefoundComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
  ]
})
export class SharedModule { }

