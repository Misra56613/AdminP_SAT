import { NgModule } from '@angular/core';
import { NopaguefoundComponent } from './nopaguefound/nopaguefound.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

// Paginas  compartidas a lo largo de la APP

@NgModule({

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

