"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var BaseFieldComponet = /** @class */ (function () {
    function BaseFieldComponet() {
        this.fieldSubscription = null;
        this.placeholder = '';
        this.required = false;
        this.error = '';
        this.field = new forms_1.FormControl('');
        this._value = '';
        // mandatory for reactive components
        this.touchedChange = function () { };
        this.propagateChange = function () { };
        this.validateFn = function () { };
    }
    Object.defineProperty(BaseFieldComponet.prototype, "value", {
        // return basic value
        get: 
        // return basic value
        function () {
            return this._value;
        },
        // where's the magic happens
        set: 
        // where's the magic happens
        function (val) {
            try {
                if (this._value !== val) {
                    this._value = val;
                    this.propagateChange(this._value);
                }
            }
            catch (e) {
                console.warn(e);
            }
        },
        enumerable: true,
        configurable: true
    });
    // angular events
    // angular events
    BaseFieldComponet.prototype.ngOnInit = 
    // angular events
    function () {
        var _this = this;
        this.updateValidators();
        this.validateFn = this.getValidateFn();
        this.fieldSubscription = this.field.valueChanges.subscribe(function (value) {
            _this.error = _this.getErrorMessage();
            _this.value = _this.field.invalid ? '' : value;
        });
    };
    BaseFieldComponet.prototype.ngOnChanges = function (data) {
        this.validateFn = this.getValidateFn();
        this.updateValidators();
    };
    BaseFieldComponet.prototype.ngOnDestroy = function () {
        try {
            if (this.fieldSubscription) {
                this.fieldSubscription.unsubscribe();
            }
        }
        catch (e) {
            console.warn(e);
        }
    };
    BaseFieldComponet.prototype.updateValidators = function () {
        this.field.setValidators(this.getValidators());
        this.field.updateValueAndValidity();
    };
    BaseFieldComponet.prototype.validate = function (c) {
        try {
            return this.validateFn(c);
        }
        catch (e) {
            console.warn(e);
        }
    };
    BaseFieldComponet.prototype.writeValue = function (value) {
        this.value = value;
    };
    BaseFieldComponet.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    BaseFieldComponet.prototype.registerOnTouched = function (fn) {
        this.touchedChange = fn;
    };
    BaseFieldComponet.prototype.onBlur = function () {
        this.touchedChange();
    };
    BaseFieldComponet.propDecorators = {
        "placeholder": [{ type: core_1.Input },],
        "required": [{ type: core_1.Input },],
    };
    return BaseFieldComponet;
}());
exports.BaseFieldComponet = BaseFieldComponet;
//# sourceMappingURL=base-field.component.js.map