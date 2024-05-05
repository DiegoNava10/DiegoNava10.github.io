import { Component } from '@angular/core';
import { Auto } from '../auto';
import { AutoService } from '../servicio/auto.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-collage',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './collage.component.html',
  styleUrl: './collage.component.css'
})
export class CollageComponent {
  imagenes:Auto[]=[];
  
  constructor(public autoservicio:AutoService){}

  ngOnInit(): void{
    this.imagenes=this.autoservicio.getAutos();
  }
}
