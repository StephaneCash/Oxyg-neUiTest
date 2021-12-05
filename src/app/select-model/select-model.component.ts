import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'select-model',
  templateUrl: './select-model.component.html',
  styleUrls: ['./select-model.component.css'],
})
export class SelectModelComponent implements OnInit {

  @Input() id: string;
  @Input() data: [4, 7, 9, 6];
  @Input() width = '250px';
  @Input() height = '40px';

  constructor() {}

  ngOnInit(): void {}
}
