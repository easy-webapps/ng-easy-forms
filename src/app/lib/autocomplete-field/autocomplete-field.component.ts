import { Component, OnInit, forwardRef } from '@angular/core';
import { FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { startWith } from 'rxjs/operators/startWith';

import { BaseFieldComponet, BaseOptions, TranslationObject } from '../reusable/base-field.component';

export class User {
  constructor(public name: string) {}
}

@Component({
  selector: 'app-autocomplete-field',
  templateUrl: './autocomplete-field.component.html',
  styleUrls: ['./autocomplete-field.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => AutocompleteFieldComponent), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => AutocompleteFieldComponent), multi: true }
  ]
})
export class AutocompleteFieldComponent extends BaseFieldComponet implements OnInit {
  myControl = new FormControl();

  options = [new User('Mary'), new User('Shelley'), new User('Igor')];

  filteredOptions: Observable<User[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith<string | User>(''),
      map((value) => (typeof value === 'string' ? value : value.name)),
      map((name) => (name ? this.filter(name) : this.options.slice()))
    );
  }

  filter(name: string): User[] {
    return this.options.filter((option) => option.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  getErrorMessage(): string {
    return this.field.invalid ? this.translations.InvalidCep : '';
  }

  getValidateFn(): ValidatorFn {
    return (c: FormControl) => null;
  }

  getValidators(): ValidatorFn | ValidatorFn[] {
    return [this.getValidateFn()];
  }

  displayFn(user?: User): string | undefined {
    return user ? user.name : undefined;
  }

  getTranslations(): TranslationObject {
    return {};
  }

  getOptions(): BaseOptions {
    return {};
  }
}
