import React, {useState} from 'react';
import  {connect}  from 'react-redux';
import { locales, t } from './translate'
import { updateLocale } from './dispatchers';

function useForceUpdate(){
  const [value, set] = useState(true); //boolean state
  return () => set(!value); // toggle the state to force render
}

const App = ({language}) => {
  const forceUpdate = useForceUpdate();

  const changeLocale = (e) =>
  {
    const { value } = e.currentTarget;

    updateLocale(value);
    forceUpdate();
  }

  return (
    <div className="app-root">
      <p>{t('Hello')} {t('World')}</p>

      <select onChange={changeLocale}>
        {
          Object.keys(locales).map(locale => <option key={locale} selected={locale===language}>{locale}</option>)
        }
      </select>
    </div>
  )
}

const mapStateToProps = (state) => ({
  language: state.locale
});

export default connect(mapStateToProps)(App);
