import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-laudato-si',
  templateUrl: './laudato-si.component.html',
  styleUrls: ['../estilo-de-articulos.sass', './laudato-si.component.sass']
})
export class LaudatoSiComponent implements OnInit {

  constructor(private title: Title) { 

  }

  ngOnInit(): void {
    this.title.setTitle('ILES :: Laudato Si´');
  }

}
