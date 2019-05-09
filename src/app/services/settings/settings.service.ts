import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };

  // tslint:disable-next-line:variable-name
  constructor(@Inject (DOCUMENT) private _document ) {
    this.cargarAjustes();
   }

  guardarAjustes() {
    console.log('Guardado en el localStorage');
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes)); // Convierte el objeto en un STRING
  }

  cargarAjustes() {
    if (localStorage.getItem('ajustes')) {    // Si existen los ajustes
       this.ajustes = JSON.parse(localStorage.getItem('ajustes'));  // se cargan en la variable "ajustes" y "JSON.parse" para convertir el S
       console.log('Cargando del localStorage');

       this.aplicarTema(this.ajustes.tema);
      } else {
        console.log('Usando valores por defecto');
        this.aplicarTema(this.ajustes.tema);
      }
  }
   aplicarTema( tema: string) {
    const url = `assets/css/colors/${ tema }.css`;
    this._document.getElementById('tema').setAttribute('href', url);

    this.ajustes.tema = tema;     // Aplicamos el servicio de guardado
    this.ajustes.temaUrl = url;

    this.guardarAjustes();
   }
}



interface Ajustes {
  temaUrl: string;
  tema: string;
}
