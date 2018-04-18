import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-password-field-demo',
  templateUrl: './password-field-demo.component.html',
  styleUrls: ['./password-field-demo.component.scss']
})
export class PasswordFieldDemoComponent implements OnInit {
  items = [{ value: 'low', viewValue: 'low' }, { value: 'medium', viewValue: 'medium' }, { value: 'high', viewValue: 'high' }];
  control = new FormControl('');
  model = '';
  reactiveValue = '';
  placeholder = 'password';
  fieldName = 'password';
  currentOptions = { strength: this.items[2] };
  constructor() {}

  ngOnInit() {}
}
