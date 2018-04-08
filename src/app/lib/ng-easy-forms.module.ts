import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EmailFieldModule } from './email-field/email-field.module';
import { PasswordFieldModule } from './password-field/password-field.module';
import { SaveButtonModule } from './save-button/save-button.module';
import { ToggleFieldModule } from './toggle-field/toggle-field.module';

@NgModule({
  imports: [CommonModule, EmailFieldModule, PasswordFieldModule, ToggleFieldModule],
  declarations: [],
  exports: [EmailFieldModule, PasswordFieldModule, ToggleFieldModule, SaveButtonModule]
})
export class NgEasyFormsModule {}
