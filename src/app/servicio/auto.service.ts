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
}
