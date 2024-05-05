import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ProtegidoPipe } from './protegido.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,AppComponent,ProtegidoPipe, BrowserModule,ScrollPanelModule,MatSnackBarModule
  ]
})
export class AppModule { }
