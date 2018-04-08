"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var button_1 = require("@angular/material/button");
var save_button_component_1 = require("./save-button.component");
var SaveButtonModule = /** @class */ (function () {
    function SaveButtonModule() {
    }
    SaveButtonModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule, button_1.MatButtonModule],
                    declarations: [save_button_component_1.SaveButtonComponent],
                    exports: [save_button_component_1.SaveButtonComponent]
                },] },
    ];
    /** @nocollapse */
    SaveButtonModule.ctorParameters = function () { return []; };
    return SaveButtonModule;
}());
exports.SaveButtonModule = SaveButtonModule;
//# sourceMappingURL=save-button.module.js.map