import { Component, OnInit } from '@angular/core';
import * as paginas from '../../coleccion-paginas'

declare var $: any;

@Component({
  selector: 'app-header',
  host: {'(window:resize)': 'onResize($event)'},
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})

export class HeaderComponent implements OnInit {
  coleccionPaginas = new paginas.ColeccionPaginas();
  anchoCambioVistaMovil = 700;
  menuEstaDesplegado = false;

  constructor() { 
  }

  ngOnInit(): void {
  }

  onResize(event) {
    console.log(this.esVistaMovil());
  }
  
  esVistaMovil(){
    return window.innerWidth <= this.anchoCambioVistaMovil; 
  }

  estaDesplegado(){
    return this.menuEstaDesplegado;
  }

}
