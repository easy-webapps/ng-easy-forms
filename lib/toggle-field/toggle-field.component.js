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
var ToggleFieldComponent = /** @class */ (function (_super) {
    __extends(ToggleFieldComponent, _super);
    function ToggleFieldComponent() {
        return _super.call(this) || this;
    }
    ToggleFieldComponent.prototype.getErrorMessage = function () {
        return '';
    };
    ToggleFieldComponent.prototype.getValidateFn = function () {
        return function (c) {
            return null;
        };
    };
    ToggleFieldComponent.prototype.getValidators = function () {
        return [];
    };
    ToggleFieldComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-toggle-field',
                    template: "\n    <mat-slide-toggle matInput [formControl]=\"field\" class=\"example-margin\">\n      {{placeholder}}\n    </mat-slide-toggle>\n    <mat-error *ngIf=\"field.invalid\">{{error}}</mat-error>\n  ",
                    styles: ["\n\n  "],
                    providers: [
                        { provide: forms_1.NG_VALUE_ACCESSOR, useExisting: core_1.forwardRef(function () { return ToggleFieldComponent; }), multi: true },
                        { provide: forms_1.NG_VALIDATORS, useExisting: core_1.forwardRef(function () { return ToggleFieldComponent; }), multi: true }
                    ]
                },] },
    ];
    /** @nocollapse */
    ToggleFieldComponent.ctorParameters = function () { return []; };
    return ToggleFieldComponent;
}(base_field_component_1.BaseFieldComponet));
exports.ToggleFieldComponent = ToggleFieldComponent;
//# sourceMappingURL=toggle-field.component.js.map