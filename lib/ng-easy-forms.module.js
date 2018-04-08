"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var email_field_module_1 = require("./email-field/email-field.module");
var password_field_module_1 = require("./password-field/password-field.module");
var save_button_module_1 = require("./save-button/save-button.module");
var toggle_field_module_1 = require("./toggle-field/toggle-field.module");
var NgEasyFormsModule = /** @class */ (function () {
    function NgEasyFormsModule() {
    }
    NgEasyFormsModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule, email_field_module_1.EmailFieldModule, password_field_module_1.PasswordFieldModule, toggle_field_module_1.ToggleFieldModule],
                    declarations: [],
                    exports: [email_field_module_1.EmailFieldModule, password_field_module_1.PasswordFieldModule, toggle_field_module_1.ToggleFieldModule, save_button_module_1.SaveButtonModule]
                },] },
    ];
    /** @nocollapse */
    NgEasyFormsModule.ctorParameters = function () { return []; };
    return NgEasyFormsModule;
}());
exports.NgEasyFormsModule = NgEasyFormsModule;
//# sourceMappingURL=ng-easy-forms.module.js.map