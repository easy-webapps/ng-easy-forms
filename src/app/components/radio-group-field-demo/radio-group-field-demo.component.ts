import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-radio-group-field-demo',
  templateUrl: './radio-group-field-demo.component.html',
  styleUrls: ['./radio-group-field-demo.component.scss']
})
export class RadioGroupFieldDemoComponent implements OnInit {
  model = 'brocoli';
  options = ['banana', 'brocoli', 'apple'];

  options2 = [{ title: 'Star Wars', value: '1' }, { title: '2011 odissey', value: '2' }, { title: 'Breaking Bad', value: '3' }];
  model2 = new FormControl(this.options2[0]);
  constructor() {}

  ngOnInit() {}
}
