import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})
export class Graficas1Component implements OnInit {


  graficos: any = {
    grafico1: {
      labels: ['NO', 'SI'],
      data:  [24, 30],
      type: 'doughnut',
      leyenda: '¿EL usuario es ilocalizable?'
    },
    grafico2: {
      labels: ['Hombres', 'Mujeres'],
      data:  [4500, 6000],
      type: 'doughnut',
      leyenda: 'Entrevistados'
    },
    grafico3: {
      labels: ['Si', 'No'],
      data:  [95, 5],
      type: 'doughnut',
      leyenda: '¿EL área fue la correcta?'
    },
    grafico4: {
      labels: ['No', 'Si', ],
      data:  [85, 15],
      type: 'doughnut',
      leyenda: '¿El sistema funciona correctamente?'
    },
  };

  constructor() { }

  ngOnInit() {
  }

}
