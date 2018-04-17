import { Component, forwardRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidatorFn, Validators } from '@angular/forms';
import { keys } from 'ramda';

import { BaseFieldComponet, BaseOptions } from '../reusable/base-field.component';
import {
  passwordConfig,
  PasswordConfigInterface,
  PasswordConfigType,
  PasswordTranslationObject,
  passwordTranslations
} from './password.model';

@Component({
  selector: 'app-password-field',
  templateUrl: './password-field.component.html',
  styleUrls: ['./password-field.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => PasswordFieldComponent), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => PasswordFieldComponent), multi: true }
  ]
})
export class PasswordFieldComponent extends BaseFieldComponet implements OnInit, OnChanges {
  @Input() passwordStrenght = 'high';
  private min = 6;
  private passwordData: PasswordConfigInterface = passwordConfig;
  constructor() {
    super();
    this.required = true;
  }

  ngOnChanges(data: SimpleChanges) {
    super.ngOnChanges(data);
  }

  getErrorMessage(): string {
    if (this.field.hasError('required')) {
      return this.translations.required;
    }
    if (this.field.hasError('minlength')) {
      const min = this.field.errors['minlength'].requiredLength;
      return this.translations.minCharacters.replace('${min}', min);
    }

    if (this.field.hasError('pattern')) {
      const data = this.getPasswordData();
      return this.translations[this.passwordStrenght];
    }

    if (this.field.errors) {
      return keys(this.field.errors)[0];
    }
    return '';
  }

  getValidateFn(): ValidatorFn {
    return (c: FormControl) => {
      return null;
    };
  }

  getValidators(): ValidatorFn | ValidatorFn[] {
    const v = [Validators.required];
    const data = this.getPasswordData();
    v.push(Validators.minLength(data.length));
    v.push(Validators.pattern(data.pattern));
    return v;
  }

  getPasswordData(): PasswordConfigType {
    return this.passwordData[this.passwordStrenght] ? this.passwordData[this.passwordStrenght] : this.passwordData.high;
  }

  getTranslations(): PasswordTranslationObject {
    return passwordTranslations;
  }

  getOptions(): BaseOptions {
    return {};
  }
}
