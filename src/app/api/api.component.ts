import { Component } from '@angular/core';
import { CarrosService } from '../API_Service/carros.service';
import { Carros } from '../API_Int/carros';
@Component({
  selector: 'app-api',
  standalone: true,
  imports: [],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class APIComponent {
  array:Carros[]=[];
  constructor(public carroService:CarrosService){}
  ngOnInit(){
    console.log("En este moemnto el componente se ha cargado");
    this.recuperarDatos();
  }
  recuperarDatos():void{
    console.log("entre");
    this.carroService.retornar().subscribe({
    next:this.successRequest.bind(this),
    error:(err)=>{console.log(err)}
    });
  }
  successRequest(data:any):void{
    console.log("data",data);
    this.array=data.products;
    console.log("array",this.array);
  }
}
