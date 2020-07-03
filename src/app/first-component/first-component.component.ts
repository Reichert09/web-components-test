import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class FirstComponentComponent implements OnInit {

  @Input() name: string;
  @Input() showMessage = false;
  @Output() clicked: EventEmitter<string[]> = new EventEmitter<string[]>();

  constructor() { }

  ngOnInit(): void {
  }

  emitEvent() {
    this.clicked.emit(['teste', 'testando']);
  }

}
