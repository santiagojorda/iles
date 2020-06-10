import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-titulo-articulo',
  templateUrl: './titulo-articulo.component.html',
  styleUrls: ['./titulo-articulo.component.sass', '../estilo-titulos.component.sass']
})
export class TituloArticuloComponent implements OnInit {

  @Input() titulo: string;

  constructor() { }

  ngOnInit(): void {
  }

}
