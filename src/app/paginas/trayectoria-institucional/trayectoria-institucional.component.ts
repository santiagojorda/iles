import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ColeccionPaginas } from '../../coleccion-paginas'

@Component({
  selector: 'app-trayectoria-institucional',
  templateUrl: './trayectoria-institucional.component.html',
  styleUrls: ['../estilo-de-articulos.sass', './trayectoria-institucional.component.sass']
})
export class TrayectoriaInstitucionalComponent implements OnInit {

  tituloPagina = (new ColeccionPaginas()).obtenerNombrePagina(3);

  constructor(private title: Title) {

  }

  ngOnInit(): void {
    this.title.setTitle('ILES :: ' + this.tituloPagina);
  }

}
