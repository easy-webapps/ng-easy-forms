import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';

import { NgEasyFormsModule } from '../lib/ng-easy-forms.module';
import { EmailFieldDemoComponent } from './../components/email-field-demo/email-field-demo.component';
import { PasswordFieldDemoComponent } from './../components/password-field-demo/password-field-demo.component';
import { ToggleFieldDemoComponent } from './../components/toggle-field-demo/toggle-field-demo.component';
import { AutocompleteFieldDemoComponent } from './autocomplete-field-demo/autocomplete-field-demo.component';
import { CepFieldDemoComponent } from './cep-field-demo/cep-field-demo.component';
import { CheckboxGroupFieldDemoComponent } from './checkbox-group-field-demo/checkbox-group-field-demo.component';
import { CpfFieldDemoComponent } from './cpf-field-demo/cpf-field-demo.component';
import { PhoneFieldDemoComponent } from './phone-field-demo/phone-field-demo.component';
import { RadioGroupFieldDemoComponent } from './radio-group-field-demo/radio-group-field-demo.component';
import { SaveButtonDemoComponent } from './save-button-demo/save-button-demo.component';

@NgModule({
  imports: [
    CommonModule,
    NgEasyFormsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    MatGridListModule
  ],
  declarations: [
    CpfFieldDemoComponent,
    EmailFieldDemoComponent,
    PasswordFieldDemoComponent,
    SaveButtonDemoComponent,
    ToggleFieldDemoComponent,
    CepFieldDemoComponent,
    PhoneFieldDemoComponent,
    AutocompleteFieldDemoComponent,
    RadioGroupFieldDemoComponent,
    CheckboxGroupFieldDemoComponent
  ]
})
export class DemoEasyFormsModule {}
