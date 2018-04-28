import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { CepFieldComponent } from './cep-field.component';
import { CepFieldModule } from './cep-field.module';

describe('CepFieldComponent - ', () => {
  let component: CepFieldComponent;
  let fixture: ComponentFixture<CepFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, CepFieldModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CepFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('testing default values - ', () => {
    it(`expect mask to be equal [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]`, () => {
      expect(component.mask).toEqual([/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]);
    });

    it(`expect empty options`, () => {
      expect(component.getOptions()).toEqual({});
    });
  });

  describe('testing cep validity - ', () => {
    [
      { value: '36258147', returnValue: null },
      { value: 33333333, returnValue: null },
      { value: 'abdhehdo', returnValue: { InvalidCep: 'cep contains 8 numbers' } }
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
      expect(component.getErrorMessage()).toEqual('cep contains 8 numbers');
      expect(component.field.invalid).toBeTruthy();
    });
    it(`expect error message to not be displayed`, () => {
      component.field.setValue('33999333');
      expect(component.getErrorMessage()).toEqual('');
      expect(component.field.invalid).toBeFalsy();
    });
  });
});
