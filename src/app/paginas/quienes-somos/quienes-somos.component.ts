import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ColeccionPaginas } from '../../coleccion-paginas'

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['../estilo-de-articulos.sass', './quienes-somos.component.sass']
})
export class QuienesSomosComponent implements OnInit {


  coleccionPaginas = new ColeccionPaginas; 
  tituloPagina = this.coleccionPaginas.obtenerNombrePagina(2);
  

  constructor(private title: Title) {

  }

  ngOnInit(): void {
    this.title.setTitle('ILES :: ' + this.tituloPagina);
  }

}
