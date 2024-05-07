import { Component } from '@angular/core';
import {MatButton, MatButtonModule, MatIconButton} from '@angular/material/button';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [MatButtonModule,MatIconButton],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent {

}
