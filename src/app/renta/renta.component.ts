import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { AutosComponent } from '../autos/autos.component';
import { Auto, Cita } from '../auto';
import { AutoService } from '../servicio/auto.service';
import { FormsModule } from '@angular/forms';
import { CitasService } from '../citas.service';
@Component({
  selector: 'app-renta',
  standalone: true,
  imports: [CommonModule,CalendarModule,AutosComponent,FormsModule],
  templateUrl: './renta.component.html',
  styleUrl: './renta.component.css'
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
  constructor(public autoservicio:AutoService, private citasService: CitasService){
    console.log("AutosComponent constructor");
  }
  ngOnInit(): void{
    this.cita=this.citasService.nuevaCita();
    this.misAutos=this.autoservicio.getAutos();
  }
  nuevaCita():void{
    console.log('Info Nueva cita');
    console.log(this.cita.nombre);
    this.citasService.agregarCita(this.cita);
  }
}
