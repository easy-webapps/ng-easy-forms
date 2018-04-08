"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var password_field_component_1 = require("./password-field.component");
var PasswordFieldModule = /** @class */ (function () {
    function PasswordFieldModule() {
    }
    PasswordFieldModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, form_field_1.MatFormFieldModule, input_1.MatInputModule],
                    declarations: [password_field_component_1.PasswordFieldComponent],
                    exports: [password_field_component_1.PasswordFieldComponent]
                },] },
    ];
    /** @nocollapse */
    PasswordFieldModule.ctorParameters = function () { return []; };
    return PasswordFieldModule;
}());
exports.PasswordFieldModule = PasswordFieldModule;
//# sourceMappingURL=password-field.module.js.map