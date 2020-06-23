import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ColeccionPaginas } from 'src/app/coleccion-paginas';

@Component({
  selector: 'app-laudato-si',
  templateUrl: './laudato-si.component.html',
  styleUrls: ['../estilo-de-articulos.sass', './laudato-si.component.sass']
})
export class LaudatoSiComponent implements OnInit {

  coleccionPaginas = new ColeccionPaginas();
  tituloPagina = this.coleccionPaginas.obtenerNombrePagina(6);

  constructor(private title: Title) { 

  }

  ngOnInit(): void {
    this.title.setTitle('ILES :: ' + this.tituloPagina);
  }

}
