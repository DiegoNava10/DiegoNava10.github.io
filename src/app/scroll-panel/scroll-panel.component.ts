import { Component } from '@angular/core';
import { ScrollPanelModule } from 'primeng/scrollpanel';

@Component({
  selector: 'app-scroll-panel',
  standalone: true,
  imports: [ScrollPanelModule],
  templateUrl: './scroll-panel.component.html',
  styleUrl: './scroll-panel.component.css'
})
export class ScrollPanelComponent {

}
