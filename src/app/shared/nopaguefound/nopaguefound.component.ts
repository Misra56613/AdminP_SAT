import { Component, OnInit } from '@angular/core';

declare function init_plugins(); // se declara para ingresar

@Component({
  selector: 'app-nopaguefound',
  templateUrl: './nopaguefound.component.html',
  styles: []
})
export class NopaguefoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins(); // Inicio mis plugins
  }

}
