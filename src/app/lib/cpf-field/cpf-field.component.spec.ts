import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { CpfFieldComponent } from './cpf-field.component';
import { CpfFieldModule } from './cpf-field.module';

describe('CpfFieldComponent', () => {
  let component: CpfFieldComponent;
  let fixture: ComponentFixture<CpfFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CpfFieldModule, NoopAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpfFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('testing default values - ', () => {
    it(`expect mask to be equal [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]`, () => {
      expect(component.mask).toEqual([/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]);
    });

    it(`expect empty options`, () => {
      expect(component.getOptions()).toEqual({});
    });
  });

  describe('testing validity - ', () => {
    [
      { value: '12345678909', returnValue: null },
      { value: 12345678909, returnValue: null },
      { value: null, returnValue: null },
      { value: '00000000000', returnValue: { InvalidCPF: 'Invalid cpf!' } },
      { value: 'abcdefghijk', returnValue: { InvalidCPF: 'Invalid cpf!' } },
      { value: '123', returnValue: { InvalidCPF: 'Invalid cpf!' } },
    ].forEach((v) => {
      it(`expect ${v.value} to be equal ${v.returnValue}`, () => {
        const fn = component.getValidateFn();
        expect(fn(new FormControl(v.value))).toEqual(v.returnValue);
      });
    });
  });

  describe('testing error message - ', () => {
    it(`expect error message to be displayed`, () => {
      component.field.setValue('33');
      expect(component.getErrorMessage()).toEqual('Invalid cpf!');
      expect(component.field.invalid).toBeTruthy();
    });
    it(`expect error message to not be displayed`, () => {
      component.field.setValue('12345678909');
      expect(component.getErrorMessage()).toEqual('');
      expect(component.field.invalid).toBeFalsy();
    });
  });
});
