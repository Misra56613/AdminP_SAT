import { Component, OnInit } from '@angular/core';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
import { SubirArchivoService } from '../../services/subir-archivo/subir-archivo.service';
import { ModalUploadService } from './modal-upload.service';

const swal: SweetAlert = _swal as any; // Alertas

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styles: []
})
export class ModalUploadComponent implements OnInit {


  imagenSubir: File;
  imagenTemp: string;

  constructor(

    public _subirArchivoService: SubirArchivoService,
    public _modalUploadServices: ModalUploadService

  ) {}

  ngOnInit() {
  }

  cerrarModal() {

    this.imagenTemp = null;
    this.imagenSubir = null;

    this._modalUploadServices.ocultarModal();

  }

  seleccionImage( archivo: File ) {

    if ( !archivo ) {
      this.imagenSubir = null;
      return;
    }

    if ( archivo.type.indexOf('image') < 0 ) {
      swal('Sólo imágenes', 'El archivo seleccionado no es una imagen', 'error');
      this.imagenSubir = null;
      return;
    }

    this.imagenSubir = archivo;

    const reader = new FileReader();
    const urlImagenTemp = reader.readAsDataURL( archivo );

    reader.onloadend = () => this.imagenTemp = reader.result.toString();
}

subirImagen() {

  this._subirArchivoService.subirArchivo( this.imagenSubir, this._modalUploadServices.tipo, this._modalUploadServices.id )
        .then( resp => {

          this._modalUploadServices.notificacion.emit( resp );
          this.cerrarModal();

        })
        .catch( err => {
          console.log( 'Error en la carga... ');
        });

}


}
