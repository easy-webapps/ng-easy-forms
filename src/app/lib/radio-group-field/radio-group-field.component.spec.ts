import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { RadioGroupFieldComponent } from './radio-group-field.component';
import { RadioGroupFieldModule } from './radio-group-field.module';

describe('RadioGroupFieldComponent', () => {
  let component: RadioGroupFieldComponent;
  let fixture: ComponentFixture<RadioGroupFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RadioGroupFieldModule, NoopAnimationsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioGroupFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
