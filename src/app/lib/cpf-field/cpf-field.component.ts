import { Component, forwardRef } from '@angular/core';
import { FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidatorFn } from '@angular/forms';

import { BaseFieldComponet, BaseOptions } from '../reusable/base-field.component';
import { CpfTranslationObject, cpfTranslations, invalidCpfArray } from './cpf-field.model';

@Component({
  selector: 'app-cpf-field',
  templateUrl: './cpf-field.component.html',
  styleUrls: ['./cpf-field.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CpfFieldComponent), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => CpfFieldComponent), multi: true }
  ]
})
export class CpfFieldComponent extends BaseFieldComponet {
  public mask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  constructor() {
    super();
  }

  getErrorMessage(): string {
    return this.field.invalid ? this.translations.invalidCpf : '';
  }

  getValidateFn(): ValidatorFn {
    return (c: FormControl) => {
      if (!c.value) {
        return null;
      }
      if (this.isCpfValid(c.value.match(/\d+/g).join(''))) {
        return null;
      }
      return { InvalidCPF: this.translations.invalidCpf };
    };
  }

  getValidators(): ValidatorFn | ValidatorFn[] {
    return [this.getValidateFn()];
  }

  private isCpfValid(strCpf: string): boolean {
    let soma = 0;
    let resto = 0;
    if (!strCpf || strCpf.length < 11 || invalidCpfArray.indexOf(strCpf) !== -1) {
      return false;
    }

    for (let i = 1; i <= 9; i++) {
      soma = soma + parseInt(strCpf.substring(i - 1, i), 10) * (11 - i);
    }

    resto = soma % 11;

    if (resto === 10 || resto === 11 || resto < 2) {
      resto = 0;
    } else {
      resto = 11 - resto;
    }

    if (resto !== parseInt(strCpf.substring(9, 10), 10)) {
      return false;
    }

    soma = 0;

    for (let i = 1; i <= 10; i++) {
      soma = soma + parseInt(strCpf.substring(i - 1, i), 10) * (12 - i);
    }
    resto = soma % 11;

    if (resto === 10 || resto === 11 || resto < 2) {
      resto = 0;
    } else {
      resto = 11 - resto;
    }

    if (resto !== parseInt(strCpf.substring(10, 11), 10)) {
      return false;
    }

    return true;
  }

  getTranslations(): CpfTranslationObject {
    return cpfTranslations;
  }

  getOptions(): BaseOptions {
    return {};
  }
}
