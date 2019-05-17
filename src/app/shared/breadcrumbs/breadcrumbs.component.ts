import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {  // El breadcrumbs siempre está activo

titulo: string;  // Se declara para nuestro HTML

  constructor(private router: Router,
              private title: Title,
              private meta: Meta) {

     this.getDataRoute()
     .subscribe(data => {
       console.log(data);
       this.titulo = data.titulo;   // Para utilizar la data de los titulos en nuestro HTML
       this.title.setTitle(this.titulo );  // Title de Angular

       const metaTag: MetaDefinition = {  // Construyemos el Meta tag

        name: 'description',
        contenido: this.titulo
       };
       this.meta.updateTag(metaTag);
      });
  }

  ngOnInit() {
  }
// Aplico operadores
  getDataRoute() {
   return this.router.events.pipe( // El "Pipe regresa un observable"

      filter( evento => evento instanceof ActivationEnd), // Si es una instancia de "ActivationEnd", me deja pasar
      // tslint:disable-next-line:max-line-length
      filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null), // Defino el tipo para que TS me ayude a no cometer errores cuando trabajo con un  tipo de dato en particular
     map((evento: ActivationEnd) =>  evento.snapshot.data )  // Método aspersor
      );
  }
}
