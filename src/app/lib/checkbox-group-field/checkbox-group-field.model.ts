import { BaseOptions } from '../reusable/base-field.component';

export interface CheckboxGroupDataObject extends BaseOptions {
  value: string;
  title: string;
  checked?: boolean;
}

export type CheckboxGroupType = CheckboxGroupDataObject | string;

export interface CheckedObject {
  [s: string]: boolean;
}
