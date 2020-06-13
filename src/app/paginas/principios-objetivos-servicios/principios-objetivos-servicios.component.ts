import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-principios-objetivos-servicios',
  templateUrl: './principios-objetivos-servicios.component.html',
  styleUrls: ['../estilo-de-articulos.sass', './principios-objetivos-servicios.component.sass']
})
export class PrincipiosObjetivosServiciosComponent implements OnInit {

  constructor(private title: Title) { 

  }

  ngOnInit(): void {
    this.title.setTitle('ILES :: Principios rectores, objetivos y servicios');
  }

}
