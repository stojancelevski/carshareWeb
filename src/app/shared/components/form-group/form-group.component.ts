import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {
  @Input() cols: string;
  @Input() validationMessage: string;
  @Input() label: string;
  @Input() labelId: string;

  constructor() {
  }

  ngOnInit() {
  }

}
