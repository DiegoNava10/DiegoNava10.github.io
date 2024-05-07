import { Component } from '@angular/core';
import { ScrollPanelComponent } from '../scroll-panel/scroll-panel.component';
import { CarruselComponent } from '../carrusel/carrusel.component';
import { CollageComponent } from '../collage/collage.component';
import { ButtonsComponent } from '../buttons/buttons.component';


@Component({
  selector: 'app-menu-princ',
  standalone: true,
  imports: [ScrollPanelComponent,CarruselComponent,CollageComponent,ButtonsComponent],
  templateUrl: './menu-princ.component.html',
  styleUrl: './menu-princ.component.css'
})
export class MenuPrincComponent {
  
}
