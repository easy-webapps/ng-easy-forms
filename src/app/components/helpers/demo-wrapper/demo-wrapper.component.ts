import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-demo-wrapper',
  templateUrl: './demo-wrapper.component.html',
  styleUrls: ['./demo-wrapper.component.scss']
})
export class DemoWrapperComponent implements OnChanges {
  @Input() fieldName = '';
  @Input() options = {};
  _fieldName = '';
  copyText = '';
  ngModelExample = '';
  ReactiveModuleExample = '';
  InOutExample = '';
  constructor() {}

  ngOnChanges() {
    this._fieldName = this.toTitleCase(this.fieldName);
    this.ngModelExample = this.getExample({
      '[(ngModel)]': 'myModel',
      placeholder: `my${this._fieldName}`
    });
    this.ReactiveModuleExample = this.getExample({
      '[formControl]': 'control',
      placeholder: `my${this._fieldName}`
    });
    this.InOutExample = this.getExample({
      '[inputValue]': 'myInput',
      '(valueChanged)': 'myOutput=$event',
      placeholder: `my${this._fieldName}`
    });
  }

  private getExample(inputs) {
    let str = `<app-${this.fieldName}-field `;
    for (const i in inputs) {
      if (!inputs[i]) {
        continue;
      }
      str += `${i}="${inputs[i]}" `;
    }
    for (const i in this.options) {
      if (!this.options[i]) {
        continue;
      }
      const value = typeof this.options[i] === 'string' ? this.options[i] : this.options[i].value;
      str += `[${i}]="${value}" `;
    }
    str += `></app-${this.fieldName}-field>`;
    return str;
  }

  private toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  copyToClipboard(id: string) {
    try {
      const elem = document.getElementById(id);
      const selection = window.getSelection();    // Save the selection.
      const range = document.createRange();
      range.selectNodeContents(elem);
      selection.removeAllRanges();          // Remove all ranges from the selection.
      selection.addRange(range);            // Add the new range.
      const successful = document.execCommand('copy');
      this.copyText = successful ? 'text copied to clipboard!' : 'text not copied!';
      selection.removeAllRanges();
    } catch (err) {
      this.copyText = 'Oops, unable to copy';
    }
    setTimeout(() => {
      this.copyText = '';
    }, 3000);
  }
}
