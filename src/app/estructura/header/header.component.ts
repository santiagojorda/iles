import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

import * as paginas from '../../coleccion-paginas'

declare var $: any;

@Component({
  selector: 'app-header',
  host: {'(window:resize)': 'onResize($event)'},
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})

export class HeaderComponent implements OnInit, ElementRef {
  coleccionPaginas = new paginas.ColeccionPaginas();
  anchoCambioVistaMovil = 700;
  menuEstaDesplegado = false;
  nativeElement: any;

  @ViewChild("toggler") toggler: ElementRef;


  constructor(private renderer: Renderer2) { 
  }

  ngOnInit(): void {
  }

  clickCheckBox(){
    if(this.estaDesplegado()){
        this.toggler.nativeElement.checked = false;
        this.menuEstaDesplegado = false;
    }
    else{
      this.toggler.nativeElement.checked = true;
      this.menuEstaDesplegado = true;
    }
    console.log("esta desplegado = " + this.menuEstaDesplegado);
  }

  onResize(event) {
    console.log(this.esVistaMovil());
  }
  
  esVistaMovil(){
    return window.innerWidth <= this.anchoCambioVistaMovil; 
  }

  esVistaEscritorio(){
    return window.innerWidth >= this.anchoCambioVistaMovil; 
  }

  estaDesplegado(){
    return this.menuEstaDesplegado;
  }

}
