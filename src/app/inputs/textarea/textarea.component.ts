import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() key: string;
  @Input() label: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
