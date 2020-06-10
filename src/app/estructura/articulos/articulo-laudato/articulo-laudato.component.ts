import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-articulo-laudato',
  host: {'class' : "col-md-6 col-12"},
  templateUrl: './articulo-laudato.component.html',
  styleUrls: ['./articulo-laudato.component.sass']
})
export class ArticuloLaudatoComponent implements OnInit {

  @Input() redireccion: string;
  @Input() urlImagen: string;


  constructor() { }

  ngOnInit(): void {
  }

}
