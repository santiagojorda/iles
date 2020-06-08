import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-articulo-banner-principal',
  templateUrl: './articulo-banner-principal.component.html',
  styleUrls: ['./articulo-banner-principal.component.sass']
})
export class ArticuloBannerPrincipalComponent implements OnInit {

  @Input() titulo: string;
  @Input() descripcion: string;
  @Input() intervalo: number;
  @Input() estiloDefondo: string;
  @Input() imagenes: string[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
  