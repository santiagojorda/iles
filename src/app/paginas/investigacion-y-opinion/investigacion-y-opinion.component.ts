import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ColeccionPaginas } from '../../coleccion-paginas'

@Component({
  selector: 'app-investigacion-y-opinion',
  templateUrl: './investigacion-y-opinion.component.html',
  styleUrls: ['../estilo-de-articulos.sass', './investigacion-y-opinion.component.sass']
})
export class InvestigacionYOpinionComponent implements OnInit {

  coleccionPaginas = new ColeccionPaginas();
  tituloPagina = this.coleccionPaginas.obtenerNombrePagina(7);

  constructor(private title: Title) { 

  }

  ngOnInit(): void {
    this.title.setTitle('ILES :: ' + this.tituloPagina);
  }

}
