import { OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, ValidatorFn } from '@angular/forms';
export declare abstract class BaseFieldComponet implements OnInit, OnChanges, OnDestroy {
    private fieldSubscription;
    placeholder: string;
    required: boolean;
    error: string;
    field: FormControl;
    _value: string;
    value: string;
    ngOnInit(): void;
    ngOnChanges(data: SimpleChanges): void;
    ngOnDestroy(): void;
    protected updateValidators(): void;
    abstract getValidateFn(): ValidatorFn;
    abstract getValidators(): ValidatorFn | ValidatorFn[];
    abstract getErrorMessage(): string;
    touchedChange: any;
    propagateChange: any;
    validateFn: any;
    validate(c: FormControl): any;
    writeValue(value: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    onBlur(): void;
}
