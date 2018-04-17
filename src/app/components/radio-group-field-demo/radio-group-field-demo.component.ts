import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-group-field-demo',
  templateUrl: './radio-group-field-demo.component.html',
  styleUrls: ['./radio-group-field-demo.component.scss']
})
export class RadioGroupFieldDemoComponent implements OnInit {

  model = '';
  options = [
    'banana', 'brocoli', 'apple'
  ];

  model2 = '';
  options2 = [
    {title: 'Star Wars', value: '1'},
    {title: '2011 odissey', value: '2'},
    {title: 'Breaking Bad', value: '3'}
  ];
  constructor() { }

  ngOnInit() {
  }
}
