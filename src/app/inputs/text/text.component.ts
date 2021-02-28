import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'field-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() key: string;
  @Input() label: boolean;
  constructor() { }

  ngOnInit(): void {
  }
}
