import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ciudades-del-aprendizaje',
  templateUrl: './ciudades-del-aprendizaje.component.html',
  styleUrls: ['../estilo-de-articulos.sass', './ciudades-del-aprendizaje.component.sass']
})
export class CiudadesDelAprendizajeComponent implements OnInit {

  constructor(private title: Title) {

  }

  ngOnInit(): void {
    this.title.setTitle('ILES :: Ciudades del aprendizaje');
  }

}
