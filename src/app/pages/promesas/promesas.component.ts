import { Component, OnInit } from '@angular/core';
import { resolve, reject } from 'q';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    this.contarTres().then(
      mensaje => console.log('Termino!', mensaje)
    )
    .catch(error => console.error('Error en la promesa', error));  // Se maneja el error u excepxiones


  }

  ngOnInit() {
  }

  contarTres(): Promise<boolean> {
    // tslint:disable-next-line:no-shadowed-variable
      return new Promise( ( resolve, reject) => {  // Aquí comienza nuestra promesa

      let contador = 0;

      let intervalo = setInterval( () => {
          contador += 1;
          console.log( contador );
          if (contador === 3 ) {  // Cuando pasen 3 segundo arrojará el "resolve()"
             resolve(true );
             clearInterval(intervalo);
          }
      }, 1000);

    });

  }



}
