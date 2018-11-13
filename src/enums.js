import keymirror from 'keymirror';

export const routes = {
  HOME: '/',
  DRAFT: '/draft',
  SURVEY: '/survey',
  RESULTS: '/results',
};

export const surveyModes = keymirror({
  DRAFT: null,
  OPEN: null,
  CLOSED: null,
});

export const keyCodes = {
  ENTER: 13,
  SPACE: 32,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
};

export const questionTypes = keymirror({
  LIKERT: null,
  SINGLE_CHOICE: null,
  MULTI_CHOICE: null,
  COMMENT: null,
  SLIDER: null,
  RANKING: null,
  MATRIX: null,
});

export const choiceSetStyles = keymirror({
  BUTTON: null,
  CHECKBOX: null,
  RADIO: null,
  RATING: null,
});

export const choiceSetLayouts = keymirror({
  HORIZONTAL: null,
  VERTICAL: null,
});
