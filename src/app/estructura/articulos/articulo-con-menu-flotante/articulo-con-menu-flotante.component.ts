import { Component, OnInit, Input } from '@angular/core';
import { Pagina } from 'src/app/pagina';

@Component({
  selector: 'app-articulo-con-menu-flotante',
  templateUrl: './articulo-con-menu-flotante.component.html',
  styleUrls: ['./articulo-con-menu-flotante.component.sass']
})
export class ArticuloConMenuFlotanteComponent implements OnInit {

  @Input() titulo: string = '';
  @Input() paginaAOcultar : Pagina = null;

  constructor() { }

  ngOnInit(): void {
  }

  tieneTitulo(){
    return this.titulo;
  }

}
