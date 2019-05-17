import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {retry, map, filter} from 'rxjs/operators';
import { Subscriber, pipe, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

   subscription: Subscription;  // Variable para mi Ondestroy tipo: Subscription

   constructor() {
 this.subscription = this.regresaObservable() // Cuantas veces lo vuelve a intentar despues del oficial
    .subscribe(
      numero =>  console.log('Subs', numero),
      error => console.error('Error en el obs', error),
      () => console.log('El observador termino'),   // No recibe ningún parametro
      );  // Escucha todo de la parte de arriba
    }

  ngOnInit() {
  }

  ngOnDestroy() {                          // Ondestroy
   console.log('La pagina se va a cerrar');
   this.subscription.unsubscribe();   // se desuscribe de la línea 15
  }
 regresaObservable(): Observable<any> {
return new Observable((observer) =>  {  // Inicio del observador

    let contador = 0;
    const intervalo = setInterval(() => {
     contador += 1;

     const salida = {
       valor: contador
     };

     observer.next( salida );

    /* if (contador === 3) {
       clearInterval(intervalo);
       observer.complete();       // Lógica para parar el observador
     } */

    /* if (contador === 2) {
       // clearInterval(intervalo);
       observer.error('Auxilio viejo');
     }*/

    }, 1000); // Lo imita cada segundo

   }).pipe(         // Método de aspersor
     retry(2),
     map((res: any) => {  // usa operador map // Recibe una función que me permite transformar la DATA
      return res.valor;
      }),
      filter ((valor, index) => {
        // tslint:disable-next-line:max-line-length
       // console.log('Filter', valor, index);  // 1.- Emite el valor de la line 36 //2.- Emite el numero de veces en base 0 que eh recibido notificaiones de ese observador
         if ( (valor % 2) === 1 ) {
              // impar
              return true;
         } else {
          return false;
           // par
         }
          // EL filter siempre retorna true o false
      })
   );


 }

}
