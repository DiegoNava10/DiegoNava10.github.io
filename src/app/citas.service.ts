import { Injectable } from '@angular/core';
import { Cita } from './auto';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  citas!: Cita[];
  constructor() {
    this.citas=JSON.parse(localStorage.getItem('data') || '[]');
  }
  getCitas(){
    return this.citas;
  }
  agregarCita(cita: Cita){
    this.citas.push(cita);
    console.log(this.citas);
    localStorage.setItem('data',JSON.stringify(this.citas));
  }
  nuevaCita(): Cita{
    return{
      nombre: '',
      apellido: '',
      telefono: '',
      correo: '',
      fecha: '',
      nomAuto: '',
      marca: '',
      modelo: '',
      diasRentados: ''
    };
  }
}
