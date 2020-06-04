import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipiosObjetivosServiciosComponent } from './paginas/principios-objetivos-servicios/principios-objetivos-servicios.component';


const routes: Routes = [
  { path: '', component: PrincipiosObjetivosServiciosComponent }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
