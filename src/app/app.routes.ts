import { Routes } from '@angular/router';
import { MenuPrincComponent } from './menu-princ/menu-princ.component';
import { AutosComponent } from './autos/autos.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

export const routes: Routes = [
    {path: 'menu-princ', component: MenuPrincComponent},
    {path: 'autos', component: AutosComponent},
    {path: 'nosotros', component: NosotrosComponent},
];
