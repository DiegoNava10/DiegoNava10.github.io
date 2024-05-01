import { Component } from '@angular/core';
import { Auto } from '../auto';
import { AutoService } from '../servicio/auto.service';
import { ActivatedRoute } from '@angular/router';
import { EncontrarCocheComponent } from "../encontrarcoche/encontrar-coche.component";

@Component({
    selector: 'app-buscar',
    standalone: true,
    templateUrl: './buscar.component.html',
    styleUrl: './buscar.component.css',
    imports: [EncontrarCocheComponent]
})
export class BuscarComponent {
  nombrecoche:string='';
  indice:number=0;

  buscarcoche:Auto={
    nombre: '',
    descripcion: '',
    img: '',
    modelo: '',
    marca: '',
    precio: '',
    consumoDeCombustible: '',
    tipoDeMotor: '',
  };
  constructor(private AutoService:AutoService,private activatedRoute:ActivatedRoute){
    this.activatedRoute.params.subscribe(params =>{
      this.nombrecoche=params['nombrecoche'];
      this.indice=this.AutoService.buscarAuto(this.nombrecoche);
      console.log(this.indice);

      if(this.indice != -1){
        this.buscarcoche=this.AutoService.get1Auto(this.indice);
      }1
    });
  }
}
