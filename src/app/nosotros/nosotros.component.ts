import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ProtegidoPipe } from '../protegido.pipe';


@Component({
    selector: 'app-nosotros',
    standalone: true,
    templateUrl: './nosotros.component.html',
    styleUrl: './nosotros.component.css',
    imports: [ProtegidoPipe]
})
export class NosotrosComponent {
  urlVideo: string = 'https://www.youtube.com/embed/7dyd8GPI84s';
  urlSegura!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer){}
    
  ngOnInit(){
    this.urlSegura = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlVideo);
  }

  obtUrlSegura(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

    //const urlVideo = 'https://www.youtube.com/embed/7dyd8GPI84s';
    //this.urlVideo = this.sanitizer.bypassSecurityTrustResourceUrl(urlVideo);
  
}
