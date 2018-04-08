"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var email_field_component_1 = require("./email-field.component");
var EmailFieldModule = /** @class */ (function () {
    function EmailFieldModule() {
    }
    EmailFieldModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, form_field_1.MatFormFieldModule, input_1.MatInputModule],
                    declarations: [email_field_component_1.EmailFieldComponent],
                    exports: [email_field_component_1.EmailFieldComponent]
                },] },
    ];
    /** @nocollapse */
    EmailFieldModule.ctorParameters = function () { return []; };
    return EmailFieldModule;
}());
exports.EmailFieldModule = EmailFieldModule;
//# sourceMappingURL=email-field.module.js.map