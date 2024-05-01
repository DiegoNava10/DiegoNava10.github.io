import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-renta',
  standalone: true,
  imports: [CommonModule],
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
}
