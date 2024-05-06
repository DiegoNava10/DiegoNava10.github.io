import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { AutosComponent } from '../autos/autos.component';
import { Auto, Cita } from '../auto';
import { AutoService } from '../servicio/auto.service';
import { FormsModule } from '@angular/forms';
import { CitasService } from '../citas.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-renta',
  standalone: true,
  imports: [CommonModule,CalendarModule,AutosComponent,FormsModule],
  templateUrl: './renta.component.html',
  styleUrl: './renta.component.css',
})
export class RentaComponent {
  cita!: Cita;

  encabezado={
    "background-color":"black",
    "color":"white",
    "padding":"20px",
    "text-align":"center"
  }
  misAutos:Auto[]=[];
  
  nombreAuto!: string;
  marcaAuto!: string;
  modeloAuto!: string;

  constructor(public autoservicio:AutoService, private citasService: CitasService, private _snackBar: MatSnackBar, public ruta: ActivatedRoute){
    console.log("AutosComponent constructor");
  }
  ngOnInit(): void{
    this.cita=this.citasService.nuevaCita();
    this.misAutos=this.autoservicio.getAutos();
    this.ruta.params.subscribe(params => {
      this.nombreAuto = params['nombreAuto'];
      this.marcaAuto = params['marcaAuto'];
      this.modeloAuto = params['modeloAuto'];
    });
    this.cita.nomAuto = this.nombreAuto;
    this.cita.marca = this.marcaAuto;
    this.cita.modelo = this.modeloAuto;
  }
  nuevaCita(mensaje: string, accion: string):void{
    
    console.log(this.cita.nombre);
    this.citasService.agregarCita(this.cita);
    Swal.fire('¡Felicidades!', 'Tu renta ha sido agendada', 'success');

    this._snackBar.open(mensaje, accion, {
      duration: 5000,
      panelClass: ['estilo-snackbar'],
    });
    this.cita.nombre = '';
    this.cita.apellido = '';
    this.cita.telefono = '';
    this.cita.correo = '';
    this.cita.fecha = '';
    this.cita.nomAuto = '';
    this.cita.marca = '';
    this.cita.modelo = '';
    this.cita.diasRentados = '';
  }
}
