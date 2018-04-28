import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { PhoneFieldComponent } from './phone-field.component';
import { PhoneFieldModule } from './phone-field.module';

describe('PhoneFieldComponent', () => {
  let component: PhoneFieldComponent;
  let fixture: ComponentFixture<PhoneFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ PhoneFieldModule, NoopAnimationsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
