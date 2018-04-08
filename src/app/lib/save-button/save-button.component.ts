import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

import { SaveButtonTitles, SaveButtonTranslations } from './save-button.model';

@Component({
  selector: 'app-save-button',
  templateUrl: './save-button.component.html',
  styleUrls: ['./save-button.component.scss']
})
export class SaveButtonComponent implements OnChanges {
  @Input() status = '';
  @Input() enabled = true;
  @Input() translations: SaveButtonTranslations = SaveButtonTitles;
  @Output() clicked = new EventEmitter();

  _title = this.translations.default;
  isDisabled = false;
  isSaving = false;

  constructor() {}

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges['status'] || simpleChanges['translations']) {
      if (this.status !== '' && !this.translations[this.status]) {
        console.warn('invalid status', this.status);
      }
      this._title = this.translations[this.status] || this.translations.default;
      this.isSaving = this.status === 'saving';
    }

    this.isDisabled = ['error', 'saving'].indexOf(this.status) !== -1 || !this.enabled;
  }

  public onClick() {
    try {
      this.clicked.emit(true);
    } catch (e) {
      console.warn(e);
    }
  }
}
