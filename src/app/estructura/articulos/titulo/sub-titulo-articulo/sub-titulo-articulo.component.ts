import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sub-titulo-articulo',
  templateUrl: './sub-titulo-articulo.component.html',
  styleUrls: ['../estilo-titulos.component.sass', './sub-titulo-articulo.component.sass']
})
export class SubTituloArticuloComponent implements OnInit {
  
  @Input() titulo: string;

  constructor() { }

  ngOnInit(): void {
  }

}
