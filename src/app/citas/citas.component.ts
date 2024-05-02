import { Component } from '@angular/core';
import { Cita } from '../auto';
import { CitasService } from '../citas.service';

@Component({
  selector: 'app-citas',
  standalone: true,
  imports: [],
  templateUrl: './citas.component.html',
  styleUrl: './citas.component.css'
})
export class CitasComponent {
  citas!: Cita[];
  citasAnteriores: Cita[] = [];
  citasActuales: Cita[] = [];
  constructor(private citasService: CitasService){}
  ngOnInit(){
    this.citas=this.citasService.getCitas();
    const fechaActual = new Date();

    this.citasAnteriores = this.citas.filter(cita => new Date(cita.fecha) < fechaActual);
    this.citasActuales = this.citas.filter(cita => new Date(cita.fecha) >= fechaActual);
  }
}
