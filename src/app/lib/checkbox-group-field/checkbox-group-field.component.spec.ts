import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { CheckboxGroupFieldComponent } from './checkbox-group-field.component';
import { CheckboxGroupFieldModule } from './checkbox-group-field.module';

describe('CheckboxGroupFieldComponent', () => {
  let component: CheckboxGroupFieldComponent;
  let fixture: ComponentFixture<CheckboxGroupFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CheckboxGroupFieldModule, NoopAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxGroupFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
