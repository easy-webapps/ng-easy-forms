import { ReflectiveInjector } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveButtonTitles } from './save-button.model';
import { SaveButtonComponent } from './save-button.component';

describe('SaveButtonComponent', () => {
  let component: SaveButtonComponent;
  let fixture: ComponentFixture<SaveButtonComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [SaveButtonComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('testing initial state - ', () => {
    it('expect title to be default', () => expect(component._title).toEqual(SaveButtonTitles.default));
    it('expect isDisabled to be false', () => expect(component.isDisabled).toEqual(false));
    it('expect isSaving to be false', () => expect(component.isSaving).toEqual(false));
  });

  describe('testing ngOnChanges - ', () => {
    describe('testing isDisabled - ', () => {
      const checkDisabled = (c, inputs, expected) => {
        c.status = inputs.status;
        c.enabled = inputs.enabled;
        c.ngOnChanges({ status: 'any' });
        expect({
          isDisabled: c.isDisabled,
          isSaving: c.isSaving,
          _title: c._title
        }).toEqual(expected);
      };

      [
        {
          inputs: { enabled: true, status: 'error' },
          expected: { isDisabled: true, isSaving: false, _title: 'saveError' }
        },
        {
          inputs: { enabled: true, status: 'saving' },
          expected: { isDisabled: true, isSaving: true, _title: 'saving' }
        },
        {
          inputs: { enabled: true, status: 'saved' },
          expected: { isDisabled: false, isSaving: false, _title: 'saved' }
        },
        {
          inputs: { enabled: true, status: 'default' },
          expected: { isDisabled: false, isSaving: false, _title: 'save' }
        },
        {
          inputs: { onChanges: { status: 'any' }, enabled: true, status: 'foo' },
          expected: { isDisabled: false, isSaving: false, _title: 'save' }
        },
        {
          inputs: { enabled: false, status: 'error' },
          expected: { isDisabled: true, isSaving: false, _title: 'saveError' }
        },
        {
          inputs: { enabled: false, status: 'saving' },
          expected: { isDisabled: true, isSaving: true, _title: 'saving' }
        },
        {
          inputs: { enabled: false, status: 'saved' },
          expected: { isDisabled: true, isSaving: false, _title: 'saved' }
        },
        {
          inputs: { enabled: false, status: 'default' },
          expected: { isDisabled: true, isSaving: false, _title: 'save' }
        },
        {
          inputs: { enabled: false, status: 'foo' },
          expected: { isDisabled: true, isSaving: false, _title: 'save' }
        }
      ].forEach((test) => {
        it(`status changes to ${test.inputs.status} and enabled ${test.inputs.enabled}`, (done) => {
          checkDisabled(component, test.inputs, test.expected);
          done();
        });
      });
    });
  });
});
