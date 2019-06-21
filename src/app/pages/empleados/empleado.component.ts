import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado.model';
import { EmpleadoService } from '../../services/service.index';
import { NgForm } from '@angular/forms';
import { Area } from '../../models/area.model';
import { AreaService } from '../../services/service.index';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styles: []
})
export class EmpleadoComponent implements OnInit {

areas: Area[] = [];
empleado: Empleado = new Empleado('', '', '', '', '');
area: Area = new Area('');
totalRegistros: number = 0;

  constructor(
    public _empleadoService: EmpleadoService,
    public _areaService: AreaService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public _modalUploadService: ModalUploadService


  ) {
    activatedRoute.params.subscribe(params => {

      let id = params['id'];

      if ( id !== 'nuevo' ) {
        this.cargarEmpleado(id);

      }
    });



  }

  ngOnInit() {
    this._areaService.cargarAreas()
    .subscribe(areas => this.areas = areas );

    this._modalUploadService.notificacion
    .subscribe( resp => {
          this.empleado.img = resp.empleado.img;
    });
  }
  cargarEmpleado(id: string ) {
    this._empleadoService.cargarEmpleado(id)
    .subscribe(empleado => {

      this.empleado = empleado;
      this.empleado.area = empleado.area._id;

    });

  }
  guardarEmpleado(f: NgForm) {

    console.log(f.valid);
    console.log(f.value);

    if (f.invalid ) {
      return;
    }
    this._empleadoService.guardarEmpleado(this.empleado)
    .subscribe(empleado => {

      this.empleado._id = empleado._id;

      this.router.navigate(['/empleado', empleado._id]);

    });
  }

  cambioArea(id: string ) {

    this._areaService.obtenerArea(id)
    .subscribe(area => {
      console.log(area);

      this.area = area;
    });
  }
  cambiarFoto() {
    this._modalUploadService.mostrarModal('empleados', this.empleado._id);

  }

}
