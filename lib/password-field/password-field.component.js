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
var ramda_1 = require("ramda");
var base_field_component_1 = require("../reusable/base-field.component");
var password_model_1 = require("./password.model");
var PasswordFieldComponent = /** @class */ (function (_super) {
    __extends(PasswordFieldComponent, _super);
    function PasswordFieldComponent() {
        var _this = _super.call(this) || this;
        _this.passwordStrenght = 'high';
        _this.min = 6;
        _this.passwordData = password_model_1.passwordConfig;
        _this.required = true;
        return _this;
    }
    PasswordFieldComponent.prototype.ngOnChanges = function (data) {
        _super.prototype.ngOnChanges.call(this, data);
    };
    PasswordFieldComponent.prototype.getErrorMessage = function () {
        if (this.field.hasError('required')) {
            return 'Você deve digitar uma senha';
        }
        if (this.field.hasError('minlength')) {
            var min = this.field.errors['minlength'].requiredLength;
            return "Digite no m\u00EDnimo " + min + " caracteres";
        }
        if (this.field.hasError('pattern')) {
            var data = this.getPasswordData();
            return data.pattern.msg;
        }
        if (this.field.errors) {
            return ramda_1.keys(this.field.errors)[0];
        }
        return '';
    };
    PasswordFieldComponent.prototype.getValidateFn = function () {
        return function (c) {
            return null;
        };
    };
    PasswordFieldComponent.prototype.getValidators = function () {
        var v = [forms_1.Validators.required];
        var data = this.getPasswordData();
        v.push(forms_1.Validators.minLength(data.length));
        v.push(forms_1.Validators.pattern(data.pattern.regex));
        return v;
    };
    PasswordFieldComponent.prototype.getPasswordData = function () {
        return this.passwordData[this.passwordStrenght] ? this.passwordData[this.passwordStrenght] : this.passwordData.high;
    };
    PasswordFieldComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-password-field',
                    template: "\n    <mat-form-field class='form-field'>\n      <input matInput type='password' [placeholder]=\"placeholder\" [formControl]=\"field\" required>\n      <mat-error *ngIf=\"field.invalid\">{{error}}</mat-error>\n    </mat-form-field>\n  ",
                    styles: ["\n\n  "],
                    providers: [
                        { provide: forms_1.NG_VALUE_ACCESSOR, useExisting: core_1.forwardRef(function () { return PasswordFieldComponent; }), multi: true },
                        { provide: forms_1.NG_VALIDATORS, useExisting: core_1.forwardRef(function () { return PasswordFieldComponent; }), multi: true }
                    ]
                },] },
    ];
    /** @nocollapse */
    PasswordFieldComponent.ctorParameters = function () { return []; };
    PasswordFieldComponent.propDecorators = {
        "passwordStrenght": [{ type: core_1.Input },],
    };
    return PasswordFieldComponent;
}(base_field_component_1.BaseFieldComponet));
exports.PasswordFieldComponent = PasswordFieldComponent;
//# sourceMappingURL=password-field.component.js.map