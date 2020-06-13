import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-presidencia-y-expertos',
  templateUrl: './presidencia-y-expertos.component.html',
  styleUrls: ['./presidencia-y-expertos.component.sass']
})
export class PresidenciaYExpertosComponent implements OnInit {

  constructor(private title: Title) { 

  }

  ngOnInit(): void {
    this.title.setTitle('ILES :: Presidencia y expertos');
  }

}
