import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ProtegidoPipe } from './protegido.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ScrollPanelModule } from 'primeng/scrollpanel';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,AppComponent,ProtegidoPipe, BrowserModule, MatSnackBarModule,ScrollPanelModule]
})
export class AppModule { }
