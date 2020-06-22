import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipiosObjetivosServiciosComponent } from './paginas/principios-objetivos-servicios/principios-objetivos-servicios.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { QuienesSomosComponent } from './paginas/quienes-somos/quienes-somos.component';
import { TrayectoriaInstitucionalComponent } from './paginas/trayectoria-institucional/trayectoria-institucional.component';
import { PresidenciaYExpertosComponent } from './paginas/presidencia-y-expertos/presidencia-y-expertos.component';
import { CiudadesDelAprendizajeComponent } from './paginas/ciudades-del-aprendizaje/ciudades-del-aprendizaje.component';
import { LaudatoSiComponent } from './paginas/laudato-si/laudato-si.component';
import { InvestigacionYOpinionComponent } from './paginas/investigacion-y-opinion/investigacion-y-opinion.component';
import { ColeccionPaginas } from './coleccion-paginas';

var coleccion = new ColeccionPaginas();

const routes: Routes = [
  { path: coleccion.obtenerDireccionSinBarra(0), component: InicioComponent },
  { path: coleccion.obtenerDireccionSinBarra(1), component: PrincipiosObjetivosServiciosComponent},
  { path: coleccion.obtenerDireccionSinBarra(2), component: QuienesSomosComponent},
  { path: coleccion.obtenerDireccionSinBarra(3), component: TrayectoriaInstitucionalComponent},
  { path: coleccion.obtenerDireccionSinBarra(4), component: PresidenciaYExpertosComponent},
  { path: coleccion.obtenerDireccionSinBarra(5), component: CiudadesDelAprendizajeComponent},
  { path: coleccion.obtenerDireccionSinBarra(6), component: LaudatoSiComponent},
  { path: coleccion.obtenerDireccionSinBarra(7), component: InvestigacionYOpinionComponent},
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
