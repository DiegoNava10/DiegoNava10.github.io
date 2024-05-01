import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { AutosComponent } from '../autos/autos.component';
import { Auto } from '../auto';
import { AutoService } from '../servicio/auto.service';
@Component({
  selector: 'app-renta',
  standalone: true,
  imports: [CommonModule,CalendarModule,AutosComponent],
  templateUrl: './renta.component.html',
  styleUrl: './renta.component.css'
})
export class RentaComponent {
  encabezado={
    "background-color":"black",
    "color":"white",
    "padding":"20px",
    "text-align":"center"
  }
  misAutos:Auto[]=[];
  constructor(public autoservicio:AutoService){
    console.log("AutosComponent constructor");
  }
  ngOnInit(): void{
    this.misAutos=this.autoservicio.getAutos();
  }
}
