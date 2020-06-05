import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipiosObjetivosServiciosComponent } from './paginas/principios-objetivos-servicios/principios-objetivos-servicios.component';
import { InicioComponent } from './paginas/inicio/inicio.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'principios-objetivos-servicios', component: PrincipiosObjetivosServiciosComponent}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
