import { EventEmitter, Input, Output, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, ValidatorFn } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { isEmpty } from 'ramda';

export interface TranslationObject {
  [s: string]: string;
}

export interface BaseOptions {
  [s: string]: any;
}
export abstract class BaseFieldComponet implements OnInit, OnChanges, OnDestroy {
  protected usingReactiveForms = true;
  private fieldSubscription: Subscription = null;
  @Input() placeholder = '';
  @Input() required = false;
  @Input() options: BaseOptions = {};
  @Input() translations: TranslationObject = {};

  // use inputValue and valueChanged if you ignoring reactive modules
  @Input() inputValue = '';
  @Output() valueChanged = new EventEmitter();
  error = '';
  field = new FormControl('');
  _value = '';

  // return basic value
  get value(): string {
    return this._value;
  }

  // where's the magic happens
  set value(val) {
    try {
      if (this._value !== val) {
        this._value = val;
        this.propagateChange(this._value);
        this.valueChanged.emit(this._value);
      }

      if (!this.usingReactiveForms && this.field.value !== val) {
        this.field.setValue(val);
      }
    } catch (e) {
      console.warn(e);
    }
  }

  // angular events
  ngOnInit() {
    if (isEmpty(this.translations)) {
      this.translations = this.getTranslations();
    }
    if (isEmpty(this.options) && !!this.getOptions) {
      this.options = this.getOptions();
    }
    this.updateValidators();
    this.validateFn = this.getValidateFn();
    this.fieldSubscription = this.field.valueChanges.subscribe((value) => {
      this.error = this.getErrorMessage();
      this.value = this.field.invalid ? '' : value;
    });
  }

  ngOnChanges(data: SimpleChanges) {
    this.validateFn = this.getValidateFn();
    this.updateValidators();
  }

  ngOnDestroy() {
    try {
      if (this.fieldSubscription) {
        this.fieldSubscription.unsubscribe();
      }
    } catch (e) {
      console.warn(e);
    }
  }

  protected updateValidators() {
    this.field.setValidators(this.getValidators());
    this.field.updateValueAndValidity();
  }
  // abstract methods
  abstract getValidateFn(): ValidatorFn;
  abstract getValidators(): ValidatorFn | ValidatorFn[];
  abstract getErrorMessage(): string;
  abstract getTranslations(): TranslationObject;
  abstract getOptions(): BaseOptions;

  // mandatory for reactive components
  touchedChange: any = () => {};
  propagateChange: any = () => {};
  validateFn: any = () => {};
  validate(c: FormControl) {
    try {
      return this.validateFn(c);
    } catch (e) {
      console.warn(e);
    }
  }
  writeValue(value: any) {
    this.value = value;
  }
  registerOnChange(fn: Function) {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: Function) {
    this.touchedChange = fn;
  }
  onBlur() {
    this.touchedChange();
  }
}
