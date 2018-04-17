import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AutocompleteFieldModule } from './autocomplete-field/autocomplete-field.module';
import { CepFieldModule } from './cep-field/cep-field.module';
import { CpfFieldModule } from './cpf-field/cpf-field.module';
import { EmailFieldModule } from './email-field/email-field.module';
import { PasswordFieldModule } from './password-field/password-field.module';
import { PhoneFieldModule } from './phone-field/phone-field.module';
import { RadioGroupFieldModule } from './radio-group-field/radio-group-field.module';
import { SaveButtonModule } from './save-button/save-button.module';
import { ToggleFieldModule } from './toggle-field/toggle-field.module';

@NgModule({
  imports: [
    CommonModule,
    AutocompleteFieldModule,
    CepFieldModule,
    CpfFieldModule,
    EmailFieldModule,
    PasswordFieldModule,
    PhoneFieldModule,
    RadioGroupFieldModule,
    SaveButtonModule,
    ToggleFieldModule
  ],
  declarations: [],
  exports: [
    AutocompleteFieldModule,
    CepFieldModule,
    CpfFieldModule,
    EmailFieldModule,
    PasswordFieldModule,
    PhoneFieldModule,
    RadioGroupFieldModule,
    SaveButtonModule,
    ToggleFieldModule
  ]
})
export class NgEasyFormsModule {}
