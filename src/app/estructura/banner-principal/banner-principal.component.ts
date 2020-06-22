import { Component, OnInit } from '@angular/core';
import { ColeccionPaginas } from '../../coleccion-paginas'

@Component({
  selector: 'app-banner-principal',
  templateUrl: './banner-principal.component.html',
  styleUrls: ['./banner-principal.component.sass']
})
export class BannerPrincipalComponent implements OnInit {

  coleccionPaginas = new ColeccionPaginas();


  constructor() { }

  ngOnInit(): void {
  }

}
