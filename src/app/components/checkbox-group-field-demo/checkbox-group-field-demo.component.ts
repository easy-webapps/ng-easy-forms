import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox-group-field-demo',
  templateUrl: './checkbox-group-field-demo.component.html',
  styleUrls: ['./checkbox-group-field-demo.component.scss']
})
export class CheckboxGroupFieldDemoComponent implements OnInit {

  model = ['apple'];
  options = [
    'banana', 'brocoli', 'apple'
  ];

  model2 = [];
  options2 = [
    {title: 'Star Wars', value: '1'},
    {title: '2011 odissey', value: '2'},
    {title: 'Breaking Bad', value: '3'}
  ];
  constructor() { }

  ngOnInit() {
    this.model2 = [this.options2[1], this.options2[2]];
  }

}
