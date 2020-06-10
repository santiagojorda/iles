import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipiosObjetivosServiciosComponent } from './paginas/principios-objetivos-servicios/principios-objetivos-servicios.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { QuienesSomosComponent } from './paginas/quienes-somos/quienes-somos.component';
import { TrayectoriaInstitucionalComponent } from './paginas/trayectoria-institucional/trayectoria-institucional.component';
import { PresidenciaYExpertosComponent } from './paginas/presidencia-y-expertos/presidencia-y-expertos.component';
import { CiudadesDelAprendizajeComponent } from './paginas/ciudades-del-aprendizaje/ciudades-del-aprendizaje.component';
import { LaudatoSiComponent } from './paginas/laudato-si/laudato-si.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'principios-objetivos-servicios', component: PrincipiosObjetivosServiciosComponent},
  { path: 'quienes-somos', component: QuienesSomosComponent},
  { path: 'trayectoria-institucional', component: TrayectoriaInstitucionalComponent},
  { path: 'presidencia-y-expertos', component: PresidenciaYExpertosComponent},
  { path: 'ciudades-del-aprendizaje', component: CiudadesDelAprendizajeComponent},
  { path: 'laudato-si', component: LaudatoSiComponent},

];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
