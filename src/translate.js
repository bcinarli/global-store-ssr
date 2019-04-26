import { store } from './store';

const en_US = {
  'Hello': 'Hello',
  'World': 'World'
};

const de_DE = {
  'Hello': 'Hallo',
  'World': 'Welt'
};

const es_ES = {
  'Hello': 'Hola',
  'World': 'Mundo'
};

const fr_FR = {
  'Hello': 'Bonjour',
  'World': 'le Monde'
};

const tr_TR = {
  'Hello': 'Merhaba',
  'World': 'Dünya'
};

const locales = { de_DE, en_US, es_ES, fr_FR, tr_TR };

const t = (key) => {
  const { locale } = store.getState();

  return locales[locale][key];
};

export { t, locales };
