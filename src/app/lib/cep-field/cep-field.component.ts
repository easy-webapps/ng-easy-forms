import { Component, forwardRef } from '@angular/core';
import { FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidatorFn } from '@angular/forms';

import { BaseFieldComponet, BaseOptions, TranslationObject } from '../reusable/base-field.component';
import { cepTranslations } from './cep-field.model';

@Component({
  selector: 'app-cep-field',
  templateUrl: './cep-field.component.html',
  styleUrls: ['./cep-field.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CepFieldComponent), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => CepFieldComponent), multi: true }
  ]
})
export class CepFieldComponent extends BaseFieldComponet {
  public mask = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
  constructor() {
    super();
  }

  getErrorMessage(): string {
    return this.field.invalid ? this.translations.InvalidCep : '';
  }

  getValidateFn(): ValidatorFn {
    return (c: FormControl) =>
      !c.value ? null : c.value.match(/\d+/g).join('').length !== 8 ? { InvalidCep: this.translations.InvalidCep } : null;
  }

  getValidators(): ValidatorFn | ValidatorFn[] {
    return [this.getValidateFn()];
  }

  getTranslations(): TranslationObject {
    return cepTranslations;
  }

  getOptions(): BaseOptions {
    return {};
  }
}
