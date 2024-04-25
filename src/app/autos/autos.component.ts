import { Component } from '@angular/core';
import { Auto } from '../auto';
import { AutoService } from '../servicio/auto.service';

@Component({
  selector: 'app-autos',
  standalone: true,
  imports: [],
  templateUrl: './autos.component.html',
  styleUrl: './autos.component.css'
})
export class AutosComponent {
  misAutos:Auto[]=[];
  constructor(public autoservicio:AutoService){
    console.log("AutosComponent constructor");
  }
  ngOnInit(): void{
    this.misAutos=this.autoservicio.getAutos();
  }
}
