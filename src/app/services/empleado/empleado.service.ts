import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { UsuarioService } from '../usuario/usuario.service';
import * as _swal from 'sweetalert';

import { map } from 'rxjs/operators';
import { Empleado } from '../../models/empleado.model';

declare var swal: any;

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  totalEmpleados: number = 0;
  constructor(
public http: HttpClient,
public _usuarioService: UsuarioService
  ) { }

  cargarEmpleados() {

    const url = URL_SERVICIOS + '/empleado';

    return this.http.get( url )

    .pipe(
              map( (resp: any) => {

                this.totalEmpleados = resp.total;
                return resp.empleados;
              }));

  }
  buscarEmpleados(termino: string) {

    const url = URL_SERVICIOS + '/busqueda/coleccion/empleados/' + termino;
    return this.http.get(url)
    .pipe(
      map( (resp: any) => resp.empleados));
  }
  cargarEmpleado(id: string) {

    let url = URL_SERVICIOS + '/empleado/' + id;


    return this.http.get( url )
    .pipe(
      map((resp: any) =>  resp.empleado));
  }

  borrarEmpleado(id: string) {

    let url = URL_SERVICIOS + '/empleado/' + id;
    url += '?token=' + this._usuarioService.token;

    return this.http.delete( url )
    .pipe(
      map(resp => {

        swal('Empleado borrado', 'Empleado Borrado Correctamente', 'success');
        return resp;
      }));
  }
  guardarEmpleado(empleado: Empleado) {


    let url = URL_SERVICIOS + '/empleado';

    if (empleado._id) {
// actualizando
url += '/' + empleado._id;
url += '?token=' + this._usuarioService.token;

return this.http.put( url, empleado )
.pipe(
  map( (resp: any) =>  {
    swal('Empleado actualizado', empleado.nombre, 'success');

    return resp.empleado;

  }));


} else {
  // creando
  url += '?token=' + this._usuarioService.token;
  return this.http.post( url, empleado  )
  .pipe(
    map((resp: any) =>   {

      swal('Empleado creado', empleado.nombre, 'success');
      return resp.empleado;

    }));

}



  }

}
