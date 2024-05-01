import { Injectable } from '@angular/core';
import { Auto } from '../auto';
import { AUTOS } from '../arrAutos';

@Injectable({
  providedIn: 'root'
})
export class AutoService {
  
  private autos: Auto[]=AUTOS;
  constructor() { }
  getAutos(): Auto[]{
    return this.autos;
  }
  get1Auto(posicion:number):Auto{
    return this.autos[posicion];
  }
  buscarAuto(nombreCoche:string):number{
    let index=this.autos.findIndex(p=>p.nombre===nombreCoche);
    return index;
  }

}
