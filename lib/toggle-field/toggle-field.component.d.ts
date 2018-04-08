import { OnInit } from '@angular/core';
import { ValidatorFn } from '@angular/forms';
import { BaseFieldComponet } from '../reusable/base-field.component';
export declare class ToggleFieldComponent extends BaseFieldComponet implements OnInit {
    constructor();
    getErrorMessage(): string;
    getValidateFn(): ValidatorFn;
    getValidators(): ValidatorFn | ValidatorFn[];
}
