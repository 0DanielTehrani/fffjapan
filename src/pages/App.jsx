import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useTranslation } from 'react-i18next';
import './App.css'
import '../i18n';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import ScrollTop from '../components/ScrollTop';
import Top from './Top';
import AboutUs from './AboutUs';
import FAQ from './FAQ';
import ToOrganizeForm from './ToOrganizeForm';
import PrivacyPolicy from './PrivacyPolicy';
import ApproachToGovernments from './ApproachToGovernments';

const theme = {
  textColor: '#007850',
  fontFamily: 'noto-sans-cjk-jp',
  green: '#007850',
  yellow: '#FFE664',
  red: '#C80032',
  blue: '#0032c8',
  beige: '#FAF5C8',
  ocher: '#c8a050'
}

function App () {
  const { t, i18n } = useTranslation();

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ScrollTop>
        <Switch>
          <Route exact path='/'>
            <Top />
          </Route>
          <Route path='/about-us'>
            <AboutUs />
          </Route>
          <Route path='/faq'>
            <FAQ />
          </Route>
          <Route path='/to-organize-form'>
            <ToOrganizeForm />
          </Route>
          <Route path='/privacy-policy'>
            <PrivacyPolicy />
          </Route>
          <Route path='/approach-to-governments'>
            <ApproachToGovernments />
          </Route>
        </Switch>
        </ScrollTop>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
