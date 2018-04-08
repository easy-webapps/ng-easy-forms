"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var save_button_model_1 = require("./save-button.model");
var SaveButtonComponent = /** @class */ (function () {
    function SaveButtonComponent() {
        this.status = '';
        this.enabled = true;
        this.translations = save_button_model_1.SaveButtonTitles;
        this.clicked = new core_1.EventEmitter();
        this._title = this.translations.default;
        this.isDisabled = false;
        this.isSaving = false;
    }
    SaveButtonComponent.prototype.ngOnChanges = function (simpleChanges) {
        if (simpleChanges['status'] || simpleChanges['translations']) {
            if (this.status !== '' && !this.translations[this.status]) {
                console.warn('invalid status', this.status);
            }
            this._title = this.translations[this.status] || this.translations.default;
            this.isSaving = this.status === 'saving';
        }
        this.isDisabled = ['error', 'saving'].indexOf(this.status) !== -1 || !this.enabled;
    };
    SaveButtonComponent.prototype.onClick = function () {
        try {
            this.clicked.emit(true);
        }
        catch (e) {
            console.warn(e);
        }
    };
    SaveButtonComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-save-button',
                    template: "\n    <button mat-raised-button class=\"primary\" (click)=\"onClick()\" [disabled]=\"isDisabled\">\n      {{_title}}\n    </button>\n  ",
                    styles: ["\n\n  "]
                },] },
    ];
    /** @nocollapse */
    SaveButtonComponent.ctorParameters = function () { return []; };
    SaveButtonComponent.propDecorators = {
        "status": [{ type: core_1.Input },],
        "enabled": [{ type: core_1.Input },],
        "translations": [{ type: core_1.Input },],
        "clicked": [{ type: core_1.Output },],
    };
    return SaveButtonComponent;
}());
exports.SaveButtonComponent = SaveButtonComponent;
//# sourceMappingURL=save-button.component.js.map