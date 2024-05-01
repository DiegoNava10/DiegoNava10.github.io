import { Routes } from '@angular/router';
import { MenuPrincComponent } from './menu-princ/menu-princ.component';
import { AutosComponent } from './autos/autos.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { BuscarComponent } from './buscar/buscar.component';
import { EncontrarCocheComponent } from './encontrarcoche/encontrar-coche.component';
import { RentaComponent } from './renta/renta.component';

export const routes: Routes = [
    {path: 'menu-princ', component: MenuPrincComponent},
    {path: 'autos', component: AutosComponent},
    {path: 'nosotros', component: NosotrosComponent},
    {path: 'buscar/:nombrecoche', component:BuscarComponent},
    {path: 'coche/:id',component:EncontrarCocheComponent},
    {path: '**',pathMatch:'full',redirectTo:'menu-princ'},
    {path: 'renta', component: RentaComponent},
];
