import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FormGroupComponent),
    multi: true
  }]
})
export class FormGroupComponent implements OnInit, ControlValueAccessor {
  @Input() cols: string;
  @Input() validationMessage: string;
  @Input() label: string;
  @Input() formControlName: string;
  @Input() type: string;
  @Input() isInvalid: boolean;
  val = '';
  onChanged: any = () => {
  }
  onTouched: any = () => {
  }

  set value(val) {
    if (val !== undefined && this.value !== val) {
      this.val = val;
      this.onTouched(val);
      this.onChanged(val);
    }
  }

  writeValue(val): void {
    this.value = val;
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }


  constructor() {
  }

  ngOnInit() {
  }

}
