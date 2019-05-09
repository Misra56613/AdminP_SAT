import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare function init_plugins();
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Aplico mi css
})
export class LoginComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
    init_plugins();
  }

  ingresar() {
   this.router.navigate(['./dashboard']); // INGRESA AL Arreglo de la ruta
  }
}
