import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ColeccionPaginas } from 'src/app/coleccion-paginas';

@Component({
  selector: 'app-ciudades-del-aprendizaje',
  templateUrl: './ciudades-del-aprendizaje.component.html',
  styleUrls: ['../estilo-de-articulos.sass', './ciudades-del-aprendizaje.component.sass']
})
export class CiudadesDelAprendizajeComponent implements OnInit {

  tituloPagina = (new ColeccionPaginas()).obtenerNombrePagina(5);

  articulosAOcultar = ["ciudades", "investigacion"];

  constructor(private title: Title) {
  }

  ngOnInit(): void {
    this.title.setTitle('ILES :: ' + this.tituloPagina);
  }

}
