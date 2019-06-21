import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform( img: string, tipo: string = 'usuario'): any {

    let url = URL_SERVICIOS + '/img';

    if ( !img ) {
      return url + '/usuarios/xxx';
    }

    if ( img.indexOf('https') >= 0 ) {
      return img;
    }

    switch ( tipo ) {

      case 'usuario':
        url += '/usuarios/' + img;
        break;

      case 'empleado':
        url += '/empleados/' + img;
        break;

      case 'area':
         url += '/areas/' + img;
         break;

      default:
        console.log('tipo de imagen no existe, usuario, empleados, areas');
        url += '/usuarios/xxx';
    }

    return url;
  }

}
