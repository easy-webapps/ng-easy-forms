import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autocomplete-field-demo',
  templateUrl: './autocomplete-field-demo.component.html',
  styleUrls: ['./autocomplete-field-demo.component.scss']
})
export class AutocompleteFieldDemoComponent implements OnInit {
  model = '';
  translations = {};
  constructor() { }

  ngOnInit() {
  }

}
