import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-titulo-articulo',
  templateUrl: './titulo-articulo.component.html',
  styleUrls: ['../estilo-titulos.component.sass', './titulo-articulo.component.sass']
})
export class TituloArticuloComponent implements OnInit {

  @Input() titulo: string;

  constructor() { }

  ngOnInit(): void {
  }

}
