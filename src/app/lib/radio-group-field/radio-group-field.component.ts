import { Component, forwardRef, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidatorFn } from '@angular/forms';

import { BaseFieldComponet, BaseOptions, TranslationObject } from '../reusable/base-field.component';
import { RadioGroupDataObject } from './radio-group-field.model';

@Component({
  selector: 'app-radio-group-field',
  templateUrl: './radio-group-field.component.html',
  styleUrls: ['./radio-group-field.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => RadioGroupFieldComponent), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => RadioGroupFieldComponent), multi: true }
  ]
})
export class RadioGroupFieldComponent extends BaseFieldComponet {
  @Input() radioOptions: RadioGroupDataObject[] = [];
  constructor() {
    super();
  }

  radioChange(data: RadioGroupDataObject) {
    this.field.setValue(data);
  }

  getErrorMessage(): string {
    return '';
  }

  getValidateFn(): ValidatorFn {
    return (c: FormControl) => null;
  }

  getValidators(): ValidatorFn | ValidatorFn[] {
    return [this.getValidateFn()];
  }

  getTranslations(): TranslationObject {
    return {};
  }

  getOptions(): BaseOptions {
    return {};
  }
}
