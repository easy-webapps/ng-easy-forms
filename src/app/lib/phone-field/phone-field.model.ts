import { BaseOptions, TranslationObject } from '../reusable/base-field.component';

export type PhoneType = 'Cellphone' | 'Phone';
export interface PhoneTranslationObject extends TranslationObject {
  InvalidPhone: string;
  InvalidCelphone: string;
}

export const phoneTranslations: PhoneTranslationObject = {
  InvalidPhone: 'follow this format (99) 9999-9999',
  InvalidCelphone: 'follow this format (99) 9999-99999'
};

export interface PhoneOptions extends BaseOptions {
  PhoneType: PhoneType;
}

export const phoneDefaultOptions: PhoneOptions = {
  PhoneType: 'Cellphone'
};

export const PhoneMasks: BaseOptions = {
  Phone: ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
  Cellphone: ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/],
};

export const PhoneLenght: BaseOptions = {
  Phone: 10,
  Cellphone: 11
};
