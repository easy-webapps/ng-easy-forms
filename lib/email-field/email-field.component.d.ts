import { ValidatorFn } from '@angular/forms';
import { BaseFieldComponet } from '../reusable/base-field.component';
export declare class EmailFieldComponent extends BaseFieldComponet {
    constructor();
    getErrorMessage(): "" | "You must enter a value" | "Not a valid email";
    getValidateFn(): ValidatorFn;
    getValidators(): ValidatorFn | ValidatorFn[];
}
