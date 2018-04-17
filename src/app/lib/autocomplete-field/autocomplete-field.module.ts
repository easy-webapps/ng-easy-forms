import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TextMaskModule } from 'angular2-text-mask';

import { AutocompleteFieldComponent } from './autocomplete-field.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule, TextMaskModule],
  declarations: [AutocompleteFieldComponent],
  exports: [AutocompleteFieldComponent]
})
export class AutocompleteFieldModule {}
