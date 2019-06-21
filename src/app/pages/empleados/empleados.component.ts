import { Component, OnInit,  } from '@angular/core';
import { Empleado } from '../../models/empleado.model';
import { EmpleadoService } from 'src/app/services/service.index';
import { ModalUploadService } from 'src/app/components/modal-upload/modal-upload.service';


@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styles: []
})
export class EmpleadosComponent implements OnInit {

  empleados: Empleado[] = [];
  desde: number;
  totalRegistros: number = 0;
  cargando: boolean = true;

  constructor(
    public _empleadoService: EmpleadoService,
    public _modalUploadService: ModalUploadService
  ) { }

  ngOnInit() {
    this.cargarEmpleados();
  }

  cargarEmpleados() {
    this._empleadoService.cargarEmpleados()
          .subscribe( empleados => this.empleados = empleados );
  }

  buscarEmpleado(termino: string) {
    if (termino.length <= 0) {
      this.cargarEmpleados();
      return;
    }
    this._empleadoService.buscarEmpleados(termino)
    .subscribe(empleados => this.empleados = empleados );

  }
  borrarEmpleado(empleado: Empleado) {

    this._empleadoService.borrarEmpleado(empleado._id)
    .subscribe(() => this.cargarEmpleados());
  }


  cambiarDesde(valor: number ) {
    const desde = this.desde + valor;
    console.log(desde);

    if (desde >= this.totalRegistros) {

      return;

    }
    if (desde < 0) {
      return;
    }
    this.desde += valor;
    this.cargarEmpleados();

  }
  doSomethingOnScroll() {

  }

}

