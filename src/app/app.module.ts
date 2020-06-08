import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './estructura/root/root.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './estructura/header/header.component';
import { FooterComponent } from './estructura/footer/footer.component';
import { PrincipiosObjetivosServiciosComponent } from './paginas/principios-objetivos-servicios/principios-objetivos-servicios.component';
import { ArticuloConMenuFlotanteComponent } from './estructura/articulos/articulo-con-menu-flotante/articulo-con-menu-flotante.component';
import { TituloArticuloComponent } from './estructura/articulos/titulo-articulo/titulo-articulo.component';
import { MenuFlotanteComponent } from './estructura/menu-flotante/menu-flotante.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { BannerPrincipalComponent } from './estructura/banner-principal/banner-principal.component';
import { ContenedorPadreComponent } from './estructura/contenedor-padre/contenedor-padre.component';
import { ContenedorComponent } from './estructura/contenedor/contenedor.component';
import { ArticuloBannerPrincipalComponent } from './estructura/banner-principal/articulo-banner-principal/articulo-banner-principal.component';


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
    ArticuloBannerPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
