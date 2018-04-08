export const defaultTitle = 'save';
export const errorTitle = 'saveError';
export const savedTitle = 'saved';
export const savingTitle = 'saving';

export interface SaveButtonTranslations {
  default: string;
  error: string;
  saved: string;
  saving: string;
  [key: string]: string;
}

export const SaveButtonTitles: SaveButtonTranslations = {
  default: defaultTitle,
  error: errorTitle,
  saved: savedTitle,
  saving: savingTitle
};

export const SaveButtonStatus = [
  {title: defaultTitle, value: 'default'},
  {title: errorTitle, value: 'error'},
  {title: savedTitle, value: 'saved'},
  {title: savingTitle, value: 'saving'}
];
