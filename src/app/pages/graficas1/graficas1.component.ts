import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})
export class Graficas1Component implements OnInit {


  graficos: any = {
    grafico1: {
      labels: ['Con Frijoles', 'Con Natilla', 'Con tocino'],
      data:  [24, 30, 46],
      type: 'doughnut',
      leyenda: 'EL usuario es ilocalizable'
    },
    grafico2: {
      labels: ['Hombres', 'Mujeres', ' '],
      data:  [4500, 6000],
      type: 'doughnut',
      leyenda: 'Entrevistados'
    },
    grafico3: {
      labels: ['Si', 'No'],
      data:  [95, 5],
      type: 'doughnut',
      leyenda: '¿Encontro lo que buscaba?'
    },
    grafico4: {
      labels: ['No', 'Si', 'come kk'],
      data:  [85, 15, 4500],
      type: 'doughnut',
      leyenda: '¿Le gusta por el chiquistrikis?'
    },
  };

  constructor() { }

  ngOnInit() {
  }

}
