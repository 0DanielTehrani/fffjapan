/* eslint-disable import/first */

import React, { Suspense, lazy } from 'react';
const Top = lazy(() => import('./Top'));
const AboutUs = lazy(() => import('./AboutUs'));
const FAQ = lazy(() => import('./FAQ'));
const ToOrganizeForm = lazy(() => import('./ToOrganizeForm'));
const PrivacyPolicy = lazy(() => import('./PrivacyPolicy'));
const ApproachToGovernments = lazy(() => import('./ApproachToGovernments'));
const Actions = lazy(() => import('./Actions'));
const PressRelease200623 = lazy(() => import('./Articles/PressRelease200623'));
const PressRelease200626 = lazy(() => import('./Articles/PressRelease200626'));
const Opinion200626 = lazy(() => import('./Articles/Opinion200626'));
const GDAApplicationForm = lazy(() => import('./GDAApplicationForm'));
import { ThemeProvider } from 'styled-components'
import './App.css'
import '../i18n'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import ScrollTop from '../components/ScrollTop'

const theme = {
  textColor: '#007850',
  fontFamily: 'Noto Sans JP Medium, sans-serif',
  fontFamilyLight: 'Noto Sans JP Light, sans-serif',
  green: '#007850',
  yellow: '#FFE664',
  red: '#C80032',
  blue: '#0032c8',
  beige: '#FAF5C8',
  ocher: '#c8a050',
  gdaPrimaryColor: '#007850',
  gdaSecondaryColor: '#FFE564',
  black: '#3C3C3C'
}

function App () {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Suspense fallback={<></>}>
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
              <Route path='/actions'>
                <Actions />
              </Route>
              <Route path='/press-release-200623'>
                <PressRelease200623 />
              </Route>
              <Route path='/press-release-200626'>
                <PressRelease200626 />
              </Route>
              <Route path='/opinion-200626'>
                <Opinion200626 />
              </Route>
              <Route path='/gda-application-form'>
                <GDAApplicationForm />
              </Route>
            </Switch>
          </ScrollTop>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
