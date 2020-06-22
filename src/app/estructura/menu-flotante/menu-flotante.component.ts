import { Component, OnInit, Input } from '@angular/core';
import { ColeccionArticulosMenu } from './coleccion-articulos-menu';

@Component({
  selector: 'app-menu-flotante',
  templateUrl: './menu-flotante.component.html',
  styleUrls: ['./menu-flotante.component.sass']
})
export class MenuFlotanteComponent implements OnInit {

  coleccionArticulos = new ColeccionArticulosMenu();

  @Input() articulosAOcultar : string[];
  // @Input() articulosAOcultar : string;


  constructor() { 
  }
  
  ngOnInit(): void {
    this.eliminarArticulos();
    // this.imprimirArticulos();
  }

  // imprimirArticulos(){
  //   console.log(this.coleccionArticulos.obtenerVista(0));
  // }

  eliminarArticulos(){
    for(let i in this.articulosAOcultar){
      this.coleccionArticulos.eliminarArticulo(this.articulosAOcultar[i]);
    }
  }

  // ocultarArticulos(){
  //   if(this.articulosAOcultar == 'Ciudades')
  //     this.hayCiudades = false;
  //   else if (this.articulosAOcultar == "Laudatos")
  //     this.hayLaudatos = false;
  //   else if (this.articulosAOcultar == "Investigacion")
  //     this.hayInvestigacion = false
  // }

  // hay(articuloOculto){
  //   return articuloOculto;
  // }

}
