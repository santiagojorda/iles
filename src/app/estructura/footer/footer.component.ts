import { Component, OnInit } from '@angular/core';
import { ColeccionPaginas } from '../../coleccion-paginas'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  coleccionPaginas = new ColeccionPaginas();


  constructor() { }

  ngOnInit(): void {
  }

}
