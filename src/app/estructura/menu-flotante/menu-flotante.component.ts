import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-flotante',
  templateUrl: './menu-flotante.component.html',
  styleUrls: ['./menu-flotante.component.sass']
})
export class MenuFlotanteComponent implements OnInit {

  @Input() articulosAOcultar : string;

  hayCiudades = true;
  hayLaudatos = true;
  hayInvestigacion = true;

  constructor() { 
  }
  
  ngOnInit(): void {
    this.ocultarArticulos();
    console.log(this.articulosAOcultar);
  }

  ocultarArticulos(){
    if(this.articulosAOcultar == 'Ciudades')
      this.hayCiudades = false;
    else if (this.articulosAOcultar == "Laudatos")
      this.hayLaudatos = false;
    else if (this.articulosAOcultar == "Investigacion")
      this.hayInvestigacion = false
  }

  hay(articuloOculto){
    return articuloOculto;
  }

}
