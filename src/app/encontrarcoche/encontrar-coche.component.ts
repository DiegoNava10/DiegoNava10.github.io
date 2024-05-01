import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Auto } from '../auto';
import { AutoService } from '../servicio/auto.service';

@Component({
  selector: 'app-encontrar-coche',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './encontrar-coche.component.html',
  styleUrl: './encontrar-coche.component.css'
})
export class EncontrarCocheComponent {
 @Input()coche!:Auto;

 constructor(public AutoService:AutoService,public activatedRoute:ActivatedRoute){
  this.activatedRoute.params.subscribe(params=>{
    this.coche=AutoService.get1Auto(params['id']);
  })
 }
}
