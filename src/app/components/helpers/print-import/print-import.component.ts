import { Component, Input, OnChanges } from '@angular/core';
import { TemplateParseResult } from '@angular/compiler';

@Component({
  selector: 'app-print-import',
  templateUrl: './print-import.component.html',
  styleUrls: ['./print-import.component.scss']
})
export class PrintImportComponent implements OnChanges {

  @Input() moduleName = '';
  _moduleName = '';
  module = '';
  constructor() { }

  ngOnChanges() {
    this._moduleName = this.moduleName + '-field';
    this.module = this._moduleName.split('-').map(this.toTitleCase).join('') + 'Module';
  }

  private toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
}
