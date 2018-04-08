import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { SaveButtonComponent } from './save-button.component';

@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: [SaveButtonComponent],
  exports: [SaveButtonComponent]
})
export class SaveButtonModule {}
