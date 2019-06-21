import { Component, OnInit } from '@angular/core';
import { Area } from 'src/app/models/area.model';
import { AreaService } from '../../services/service.index';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';



const swal: SweetAlert = _swal as any; // Alertas


@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styles: []
})
export class AreasComponent implements OnInit {

  areas: Area[] = [];
  constructor(
  public _areaService: AreaService,
  public _modalUploadService: ModalUploadService
  ) { }

  ngOnInit() {

    this.cargarAreas();
    this._modalUploadService.notificacion
    .subscribe(() => this.cargarAreas() );

  }

  cargarAreas() {

    this._areaService.cargarAreas()
    .subscribe(areas =>  this.areas = areas);

  }

  guardarArea(area: Area) {

  this._areaService.actualizarArea(area)
  .subscribe();
  }

  borrarArea(area: Area) {

   this._areaService.borrarArea(area._id)
   .subscribe(() => this.cargarAreas());


  }


  buscarArea( termino: string ) {

    if ( termino.length <= 0 ) {
      this.cargarAreas();
      return;
    }

    this._areaService.buscarArea( termino )
            .subscribe( areas => this.areas = areas );

  }
  crearArea() {

    swal({

      title: 'Crear Area',

      text: 'Ingrese el nombre del Area',

      content: {

        element: 'input',

        attributes: {

          placeholder: '',

          type: 'text',

        },

      },

      icon: 'info',

      buttons: ['Cancelar', 'Guardar'],

      dangerMode: true

    }).then(valor => {

      if ( !valor || valor.length === 0) {
        return;
      }

      this._areaService.crearArea(valor)
      .subscribe(() => this.cargarAreas());

    });

  }

  actualizarImagen( area: Area ) {

    this._modalUploadService.mostrarModal( 'areas', area._id );

  }

}
