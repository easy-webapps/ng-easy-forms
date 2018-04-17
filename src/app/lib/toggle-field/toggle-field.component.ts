import { Component, forwardRef, OnInit } from '@angular/core';
import { FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidatorFn } from '@angular/forms';

import { BaseFieldComponet, BaseOptions, TranslationObject } from '../reusable/base-field.component';

@Component({
  selector: 'app-toggle-field',
  templateUrl: './toggle-field.component.html',
  styleUrls: ['./toggle-field.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => ToggleFieldComponent), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => ToggleFieldComponent), multi: true }
  ]
})
export class ToggleFieldComponent extends BaseFieldComponet implements OnInit {
  constructor() {
    super();
  }

  getErrorMessage(): string {
    return '';
  }

  getValidateFn(): ValidatorFn {
    return (c: FormControl) => {
      return null;
    };
  }

  getValidators(): ValidatorFn | ValidatorFn[] {
    return [];
  }

  getTranslations(): TranslationObject {
    return {};
  }

  getOptions(): BaseOptions {
    return {};
  }
}
