import { Routes } from '@angular/router';

import { CepFieldDemoComponent } from './cep-field-demo/cep-field-demo.component';
import { CheckboxGroupFieldDemoComponent } from './checkbox-group-field-demo/checkbox-group-field-demo.component';
import { CpfFieldDemoComponent } from './cpf-field-demo/cpf-field-demo.component';
import { EmailFieldDemoComponent } from './email-field-demo/email-field-demo.component';
import { PasswordFieldDemoComponent } from './password-field-demo/password-field-demo.component';
import { PhoneFieldDemoComponent } from './phone-field-demo/phone-field-demo.component';
import { SaveButtonDemoComponent } from './save-button-demo/save-button-demo.component';
import { ToggleFieldDemoComponent } from './toggle-field-demo/toggle-field-demo.component';
import { RadioGroupFieldDemoComponent } from './radio-group-field-demo/radio-group-field-demo.component';
export const DemoRoutes = [
  { path: 'cep-field', component: CepFieldDemoComponent },
  { path: 'checkbox-group-field', component: CheckboxGroupFieldDemoComponent },
  { path: 'cpf-field', component: CpfFieldDemoComponent },
  { path: 'email-field', component: EmailFieldDemoComponent },
  { path: 'password-field', component: PasswordFieldDemoComponent },
  { path: 'phone-field', component: PhoneFieldDemoComponent },
  { path: 'radio-group-field', component: RadioGroupFieldDemoComponent },
  { path: 'toggle-field', component: ToggleFieldDemoComponent },
  { path: 'save-button', component: SaveButtonDemoComponent }
];
