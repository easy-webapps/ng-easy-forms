import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';

import { EmailFieldModule, PasswordFieldModule, SaveButtonModule, ToggleFieldModule } from '../lib';
import { EmailFieldDemoComponent } from './../components/email-field-demo/email-field-demo.component';
import { PasswordFieldDemoComponent } from './../components/password-field-demo/password-field-demo.component';
import { ToggleFieldDemoComponent } from './../components/toggle-field-demo/toggle-field-demo.component';
import { SaveButtonDemoComponent } from './save-button-demo/save-button-demo.component';

@NgModule({
  imports: [
    CommonModule,
    EmailFieldModule,
    PasswordFieldModule,
    SaveButtonModule,
    ToggleFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    MatGridListModule
  ],
  declarations: [EmailFieldDemoComponent, PasswordFieldDemoComponent, ToggleFieldDemoComponent, SaveButtonDemoComponent],
  exports: [EmailFieldDemoComponent, PasswordFieldDemoComponent, ToggleFieldDemoComponent, SaveButtonDemoComponent]
})
export class DemoEasyFormsModule {}
