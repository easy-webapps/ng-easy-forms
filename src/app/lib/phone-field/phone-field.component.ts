import { Component, forwardRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidatorFn } from '@angular/forms';

import { BaseFieldComponet } from '../reusable/base-field.component';
import {
  phoneDefaultOptions,
  PhoneLenght,
  PhoneMasks,
  PhoneOptions,
  PhoneTranslationObject,
  phoneTranslations
} from './phone-field.model';

@Component({
  selector: 'app-phone-field',
  templateUrl: './phone-field.component.html',
  styleUrls: ['./phone-field.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => PhoneFieldComponent), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => PhoneFieldComponent), multi: true }
  ]
})
export class PhoneFieldComponent extends BaseFieldComponet implements OnChanges, OnInit {
  mask: any[] = PhoneMasks.Cellphone;
  private lenght: number = PhoneLenght.Cellphone;
  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.mask = PhoneMasks[this.options.PhoneType];
    this.lenght = PhoneLenght[this.options.PhoneType];
  }

  ngOnChanges(data: SimpleChanges) {
    super.ngOnChanges(data);
    if (data['options']) {
      this.mask = PhoneMasks[this.options.PhoneType];
      this.lenght = PhoneLenght[this.options.PhoneType];
    }
  }

  getErrorMessage(): string {
    return this.field.invalid ? this.translations.InvalidCep : '';
  }

  getValidateFn(): ValidatorFn {
    return (c: FormControl) =>
      !c.value ? null : c.value.match(/\d+/g).join('').length !== this.lenght ? { InvalidPhone: this.translations.InvalidPhone } : null;
  }

  getValidators(): ValidatorFn | ValidatorFn[] {
    return [this.getValidateFn()];
  }

  getTranslations(): PhoneTranslationObject {
    return phoneTranslations;
  }

  getOptions(): PhoneOptions {
    return phoneDefaultOptions;
  }
}
