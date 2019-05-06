import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
})
export class IncrementadorComponent implements OnInit {

  @ViewChild ('txtProgress') txtProgress: ElementRef; // Referencia sin importar en que elemento estoy

  @Input('nombre') leyenda: string = 'Leyenda'; // Para cambiar mi variable exterior
  @Input()  progreso: number = 50;

  @Output() cambioValor: EventEmitter <number> = new EventEmitter(); // Decorador Output se usa EventEmitter

  constructor() {
    // console.log('progreso', this.progreso);
   // console.log('leyenda', this.leyenda);
  }


  ngOnInit() {
    // console.log('leyenda', this.leyenda);
   // console.log('progreso', this.progreso);
  }

 onChanges(newValue: number) {  // Función de inpunt en el html "Onchanges"
 // const elemHTML: any  = document.getElementsByName('progreso')[0];
 // console.log(this.txtProgress);

 if (newValue >= 100) {

     this.progreso = 100;
   } else if (newValue <= 0) { // Lógioa de manejo de excepciones
     this.progreso = 0;
   } else {
   this.progreso = newValue;
   }

 // elemHTML.value = Number (this.progreso);
 this.txtProgress.nativeElement.value = this.progreso; // Para aplicar en todos los elementos

 this.cambioValor.emit(this.progreso); // Para que se actualice la barra de eprogreso
  }

  cambiarValor( valor: number )  {   // Función
    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;
    }
    if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0 ;
      return;
   }
    this.progreso = this.progreso + valor;

    this.cambioValor.emit(this.progreso); // Emito progreso

    this.txtProgress.nativeElement.focus(); // FOCO EN ELEMENTO
    }
}
