"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var base_field_component_1 = require("../reusable/base-field.component");
var EmailFieldComponent = /** @class */ (function (_super) {
    __extends(EmailFieldComponent, _super);
    function EmailFieldComponent() {
        var _this = _super.call(this) || this;
        _this.required = true;
        return _this;
    }
    EmailFieldComponent.prototype.getErrorMessage = function () {
        return this.field.hasError('required') ? 'You must enter a value' : this.field.hasError('email') ? 'Not a valid email' : '';
    };
    EmailFieldComponent.prototype.getValidateFn = function () {
        return function (c) {
            return null;
        };
    };
    EmailFieldComponent.prototype.getValidators = function () {
        return [forms_1.Validators.required, forms_1.Validators.email];
    };
    EmailFieldComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-email-field',
                    template: "\n    <mat-form-field class='form-field'>\n      <input matInput type='email' [placeholder]=\"placeholder\" [formControl]=\"field\" required>\n      <mat-error *ngIf=\"field.invalid\">{{error}}</mat-error>\n    </mat-form-field>\n  ",
                    styles: ["\n\n  "],
                    providers: [
                        { provide: forms_1.NG_VALUE_ACCESSOR, useExisting: core_1.forwardRef(function () { return EmailFieldComponent; }), multi: true },
                        { provide: forms_1.NG_VALIDATORS, useExisting: core_1.forwardRef(function () { return EmailFieldComponent; }), multi: true }
                    ]
                },] },
    ];
    /** @nocollapse */
    EmailFieldComponent.ctorParameters = function () { return []; };
    return EmailFieldComponent;
}(base_field_component_1.BaseFieldComponet));
exports.EmailFieldComponent = EmailFieldComponent;
//# sourceMappingURL=email-field.component.js.map