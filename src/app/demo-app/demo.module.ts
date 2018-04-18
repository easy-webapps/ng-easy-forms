import { LayoutModule } from '@angular/cdk/layout';
import { FullscreenOverlayContainer, OverlayContainer } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { DemoEasyFormsModule } from '../components/demo-easy-forms.module';
import { DemoAppComponent, HomeComponent } from './demo-app.component';
import { DEMO_APP_ROUTES } from './routes';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(DEMO_APP_ROUTES),
    DemoEasyFormsModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule
  ],
  declarations: [DemoAppComponent, HomeComponent],
  providers: [{ provide: OverlayContainer, useClass: FullscreenOverlayContainer }],
  entryComponents: [DemoAppComponent]
})
export class DemoModule {}
