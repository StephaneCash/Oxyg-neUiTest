import { Component, OnInit, Input } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'select-model',
  templateUrl: './select-model.component.html',
  styleUrls: ['./select-model.component.css'],
})
export class SelectModelComponent implements OnInit {

  @Input() id: string;
  @Input() data: [{key:1,value:"Moi"}];
  @Input() width = '250px';
  @Input() height = '40px';
  @Input() isForm:false;
  @Input() formGroup = FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
