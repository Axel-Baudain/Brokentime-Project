export const INPUT_CHANGE = 'INPUT_CHANGE';
export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const ALTERNATE_FORMS = 'ALTERNATE_FORMS';
export const SWITCH_FORMS_DISPLAY = 'SWITCH_FORMS_DISPLAY';

// ============================ Action creators ============================
export const inputChange = (payload) => ({
  type: INPUT_CHANGE,
  payload,
});

export const loginSubmit = () => ({
  type: LOGIN_SUBMIT,
});

export const loginSucess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginError = () => ({
  type: LOGIN_ERROR,
});

export const alternateForms = () => ({
  type: ALTERNATE_FORMS,
});

export const switchFormsDisplay = () => ({
  type: SWITCH_FORMS_DISPLAY,
});