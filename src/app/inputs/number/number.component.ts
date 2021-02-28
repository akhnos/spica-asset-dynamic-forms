import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'field-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss']
})
export class NumberComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() key: string;
  @Input() label: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
