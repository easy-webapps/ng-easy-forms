"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var slide_toggle_1 = require("@angular/material/slide-toggle");
var toggle_field_component_1 = require("./toggle-field.component");
var ToggleFieldModule = /** @class */ (function () {
    function ToggleFieldModule() {
    }
    ToggleFieldModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, form_field_1.MatFormFieldModule, input_1.MatInputModule, slide_toggle_1.MatSlideToggleModule],
                    declarations: [toggle_field_component_1.ToggleFieldComponent],
                    exports: [toggle_field_component_1.ToggleFieldComponent]
                },] },
    ];
    /** @nocollapse */
    ToggleFieldModule.ctorParameters = function () { return []; };
    return ToggleFieldModule;
}());
exports.ToggleFieldModule = ToggleFieldModule;
//# sourceMappingURL=toggle-field.module.js.map