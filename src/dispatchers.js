import { store } from './store';

const updateLocale = (locale) => {
  store.dispatch({
    type: 'UPDATE_LANGUAGE',
    payload: locale
  });
}

export {
  updateLocale
}
