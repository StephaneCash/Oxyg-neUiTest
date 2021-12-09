import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'input-model',
  templateUrl: './input-model.component.html',
  styleUrls: ['./input-model.component.css'],
})
export class InputModelComponent implements OnInit {
  @Input() id: string;
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() width = '250px';
  @Input() height = '40px';
  @Input() disabled = false;
  @Input() value = '';
  @Input() isForm = false;
  @Input() formGroup : FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
