import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { SaveButtonTranslations } from './save-button.model';
export declare class SaveButtonComponent implements OnChanges {
    status: string;
    enabled: boolean;
    translations: SaveButtonTranslations;
    clicked: EventEmitter<{}>;
    _title: string;
    isDisabled: boolean;
    isSaving: boolean;
    constructor();
    ngOnChanges(simpleChanges: SimpleChanges): void;
    onClick(): void;
}
