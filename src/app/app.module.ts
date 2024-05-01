import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ProtegidoPipe } from './protegido.pipe';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,AppComponent,ProtegidoPipe, BrowserModule
  ]
})
export class AppModule { }
