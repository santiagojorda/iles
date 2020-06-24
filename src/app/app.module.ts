import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './estructura/root/root.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './estructura/header/header.component';
import { FooterComponent } from './estructura/footer/footer.component';
import { PrincipiosObjetivosServiciosComponent } from './paginas/principios-objetivos-servicios/principios-objetivos-servicios.component';
import { ArticuloConMenuFlotanteComponent } from './estructura/articulos/articulo-con-menu-flotante/articulo-con-menu-flotante.component';
import { TituloArticuloComponent } from './estructura/articulos/titulo/titulo-articulo/titulo-articulo.component';
import { MenuFlotanteComponent } from './estructura/menu-flotante/menu-flotante.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { BannerPrincipalComponent } from './estructura/banner-principal/banner-principal.component';
import { ContenedorPadreComponent } from './estructura/contenedor-padre/contenedor-padre.component';
import { ContenedorComponent } from './estructura/contenedor/contenedor.component';
import { ArticuloBannerPrincipalComponent } from './estructura/banner-principal/articulo-banner-principal/articulo-banner-principal.component';
import { QuienesSomosComponent } from './paginas/quienes-somos/quienes-somos.component';
import { TrayectoriaInstitucionalComponent } from './paginas/trayectoria-institucional/trayectoria-institucional.component';
import { PresidenciaYExpertosComponent } from './paginas/presidencia-y-expertos/presidencia-y-expertos.component';
import { CiudadesDelAprendizajeComponent } from './paginas/ciudades-del-aprendizaje/ciudades-del-aprendizaje.component';
import { SubTituloArticuloComponent } from './estructura/articulos/titulo/sub-titulo-articulo/sub-titulo-articulo.component';
import { LaudatoSiComponent } from './paginas/laudato-si/laudato-si.component';
import { ArticuloLaudatoComponent } from './estructura/articulos/articulo-laudato/articulo-laudato.component';
import { InvestigacionYOpinionComponent } from './paginas/investigacion-y-opinion/investigacion-y-opinion.component';

@NgModule({
  declarations: [
    RootComponent,
    HeaderComponent,
    FooterComponent,
    PrincipiosObjetivosServiciosComponent,
    ArticuloConMenuFlotanteComponent,
    TituloArticuloComponent,
    MenuFlotanteComponent,
    InicioComponent,
    BannerPrincipalComponent,
    ContenedorPadreComponent,
    ContenedorComponent,
    ArticuloBannerPrincipalComponent,
    QuienesSomosComponent,
    TrayectoriaInstitucionalComponent,
    PresidenciaYExpertosComponent,
    CiudadesDelAprendizajeComponent,
    SubTituloArticuloComponent,
    LaudatoSiComponent,
    ArticuloLaudatoComponent,
    InvestigacionYOpinionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [  {provide: LocationStrategy, useClass: HashLocationStrategy}  ],
  bootstrap: [RootComponent]
})
export class AppModule { }
