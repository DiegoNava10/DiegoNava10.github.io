import { Component } from '@angular/core';
import { ScrollPanelComponent } from '../scroll-panel/scroll-panel.component';
import { CarruselComponent } from '../carrusel/carrusel.component';


@Component({
  selector: 'app-menu-princ',
  standalone: true,
  imports: [ScrollPanelComponent,CarruselComponent],
  templateUrl: './menu-princ.component.html',
  styleUrl: './menu-princ.component.css'
})
export class MenuPrincComponent {
  
}
