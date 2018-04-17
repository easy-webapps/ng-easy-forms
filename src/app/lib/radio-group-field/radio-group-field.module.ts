import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioGroupFieldComponent } from './radio-group-field.component';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  imports: [
    CommonModule,
    MatRadioModule
  ],
  declarations: [RadioGroupFieldComponent],
  exports: [RadioGroupFieldComponent]
})
export class RadioGroupFieldModule { }
