import { Component, OnInit, Input } from '@angular/core';
import { ColeccionPaginas } from '../../coleccion-paginas'
import { Pagina } from '../../pagina'

@Component({
  selector: 'app-menu-flotante',
  templateUrl: './menu-flotante.component.html',
  styleUrls: ['./menu-flotante.component.sass']
})
export class MenuFlotanteComponent implements OnInit {

  coleccionPaginas = new ColeccionPaginas();

  @Input() paginaAOcultar : Pagina = null;

  constructor() { 
  }
  
  ngOnInit(): void {
  }

  esteArticuloSeOcultara(otraPagina : Pagina){

    var seOcultaraEsteArticulo = true;

    if (otraPagina && this.paginaAOcultar){
      seOcultaraEsteArticulo = this.paginaAOcultar.noSonIguales(otraPagina)
    }
    
    return seOcultaraEsteArticulo;

  }

}
