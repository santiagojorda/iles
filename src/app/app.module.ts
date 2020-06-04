import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './estructura/root/root.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './estructura/header/header.component';
import { FooterComponent } from './estructura/footer/footer.component';
import { ArticuloComponent } from './estructura/articulo/articulo.component';

@NgModule({
  declarations: [
    RootComponent,
    HeaderComponent,
    FooterComponent,
    ArticuloComponent
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
