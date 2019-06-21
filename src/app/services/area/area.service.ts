import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { map } from 'rxjs/operators';
import { UsuarioService } from '../usuario/usuario.service';
import { Area } from '../../models/area.model';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';


const swal: SweetAlert = _swal as any; // Alertas

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  totalAreas: number = 0;

  constructor(
     public http: HttpClient,
     public _usuarioService: UsuarioService
  ) {}

  cargarAreas() {

    let url = URL_SERVICIOS + '/area';
    return this.http.get( url )
    .pipe(
              map( (resp: any) => {
                this.totalAreas = resp.total;
                return resp.areas;
              }));

  }

  obtenerArea( id: string ) {

    let url = URL_SERVICIOS + '/area/' + id;
    return this.http.get( url )
    .pipe(
    map( (resp: any) => resp.hospital ));

  }

  borrarArea(id: string) {

    let url = URL_SERVICIOS + '/area/' + id;
    url += '?token=' + this._usuarioService.token;

    return this.http.delete( url )
    .pipe(
      map( resp =>  swal('Area eliminada', 'Eliminado correctamente', 'success')));

  }

  crearArea(nombre: string) {

    let url = URL_SERVICIOS + '/area';

    url += '?token=' + this._usuarioService.token;

    return this.http.post( url, {nombre} )
    .pipe(
      map((resp: any) => resp.area ));

  }

  buscarArea(termino: string ) {

    const url = URL_SERVICIOS + '/busqueda/coleccion/areas/' + termino;
    return this.http.get(url)
    .pipe(
      map( (resp: any) => resp.areas));

}

actualizarArea( area: Area ) {

  let url = URL_SERVICIOS + '/area/' + area._id;
  url += '?token=' + this._usuarioService.token;

  return this.http.put( url, area )
  .pipe(
            map( (resp: any) => {

              swal('Area Actualiada', area.nombre, 'success');
              return resp.area;
            }));

}

}
