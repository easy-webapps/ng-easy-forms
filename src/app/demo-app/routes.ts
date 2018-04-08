import { Routes } from '@angular/router';

import { EmailFieldDemoComponent } from './../components/email-field-demo/email-field-demo.component';
import { PasswordFieldDemoComponent } from './../components/password-field-demo/password-field-demo.component';
import { SaveButtonDemoComponent } from './../components/save-button-demo/save-button-demo.component';
import { ToggleFieldDemoComponent } from './../components/toggle-field-demo/toggle-field-demo.component';
import { DemoAppComponent, HomeComponent } from './demo-app.component';

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

export const DEMO_APP_ROUTES: Routes = [
  {
    path: '',
    component: DemoAppComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'email-field', component: EmailFieldDemoComponent },
      { path: 'password-field', component: PasswordFieldDemoComponent },
      { path: 'save-button', component: SaveButtonDemoComponent },
      { path: 'toggle-field', component: ToggleFieldDemoComponent }
    ]
  }
];

export const ALL_ROUTES: Routes = [{ path: '', component: DemoAppComponent, children: DEMO_APP_ROUTES }];
