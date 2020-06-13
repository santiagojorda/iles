import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['../estilo-de-articulos.sass', './quienes-somos.component.sass']
})
export class QuienesSomosComponent implements OnInit {

  constructor(private title: Title) {

  }

  ngOnInit(): void {
    this.title.setTitle('ILES :: Quiénes somos');
  }

}
