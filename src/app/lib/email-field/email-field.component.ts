import { Component, forwardRef } from '@angular/core';
import { FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidatorFn, Validators } from '@angular/forms';

import { BaseFieldComponet, BaseOptions } from '../reusable/base-field.component';
import { EmailTranslationObject, emailTranslations } from './email-field.model';

@Component({
  selector: 'app-email-field',
  templateUrl: './email-field.component.html',
  styleUrls: ['./email-field.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => EmailFieldComponent), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => EmailFieldComponent), multi: true }
  ]
})
export class EmailFieldComponent extends BaseFieldComponet {
  constructor() {
    super();
    this.required = true;
  }

  getErrorMessage(): string {
    return this.field.hasError('required') ? this.translations.required : this.field.hasError('email') ?  this.translations.invalid : '';
  }

  getValidateFn(): ValidatorFn {
    return (c: FormControl) => {
      return null;
    };
  }

  getValidators(): ValidatorFn | ValidatorFn[] {
    return [Validators.required, Validators.email];
  }

  getTranslations(): EmailTranslationObject {
    return emailTranslations;
  }

  getOptions(): BaseOptions {
    return {};
  }
}
