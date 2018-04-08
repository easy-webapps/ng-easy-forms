import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ValidatorFn } from '@angular/forms';
import { BaseFieldComponet } from '../reusable/base-field.component';
import { PasswordConfigType } from './password.model';
export declare class PasswordFieldComponent extends BaseFieldComponet implements OnInit, OnChanges {
    passwordStrenght: string;
    private min;
    private passwordData;
    constructor();
    ngOnChanges(data: SimpleChanges): void;
    getErrorMessage(): string;
    getValidateFn(): ValidatorFn;
    getValidators(): ValidatorFn | ValidatorFn[];
    getPasswordData(): PasswordConfigType;
}
