import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-module-card',
  templateUrl: './module-card.component.html',
  styleUrls: ['./module-card.component.sass']
})
export class ModuleCardComponent implements OnInit {

  @Input() text: string;
  @Input() route: string;

  constructor() { }

  ngOnInit() {
  }

}
