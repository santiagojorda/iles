import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ColeccionPaginas } from '../../coleccion-paginas'

@Component({
  selector: 'app-presidencia-y-expertos',
  templateUrl: './presidencia-y-expertos.component.html',
  styleUrls: ['./presidencia-y-expertos.component.sass']
})
export class PresidenciaYExpertosComponent implements OnInit {

  coleccionPaginas = new ColeccionPaginas();
  tituloPagina = this.coleccionPaginas.obtenerNombrePagina(4);

  constructor(private title: Title) { 

  }

  ngOnInit(): void {
    this.title.setTitle('ILES :: ' + this.tituloPagina);
  }

}
