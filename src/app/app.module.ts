import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ProtegidoPipe } from './protegido.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { ScrollPanelModule } from 'primeng/scrollpanel';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,AppComponent,ProtegidoPipe, BrowserModule,ScrollPanelModule,
  ]
})
export class AppModule { }
