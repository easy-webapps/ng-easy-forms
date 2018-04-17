import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxGroupFieldComponent } from './checkbox-group-field.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  imports: [
    CommonModule,
    MatCheckboxModule
  ],
  declarations: [CheckboxGroupFieldComponent],
  exports: [CheckboxGroupFieldComponent],
})
export class CheckboxGroupFieldModule { }
