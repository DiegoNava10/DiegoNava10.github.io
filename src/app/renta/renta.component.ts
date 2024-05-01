import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
@Component({
  selector: 'app-renta',
  standalone: true,
  imports: [CommonModule,CalendarModule],
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
