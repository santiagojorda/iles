import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './estructura/root/root.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './estructura/header/header.component';
import { CuerpoComponent } from './estructura/cuerpo/cuerpo.component';
import { FooterComponent } from './estructura/footer/footer.component';

@NgModule({
  declarations: [
    RootComponent,
    HeaderComponent,
    CuerpoComponent,
    FooterComponent
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
