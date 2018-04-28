import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ToggleFieldComponent } from './toggle-field.component';
import { ToggleFieldModule } from './toggle-field.module';

describe('ToggleFieldComponent', () => {
  let component: ToggleFieldComponent;
  let fixture: ComponentFixture<ToggleFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ToggleFieldModule, NoopAnimationsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
