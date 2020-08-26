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
const PressRelease200821 = lazy(() => import('./Articles/PressRelease200821'))
const Opinion200626 = lazy(() => import('./Articles/Opinion200626'));
const GDADemand = lazy(() => import('./Articles/GDADemand'))
const GDAParticipantInfo = lazy(() => import('./Articles/GDAParticipantInfo'))
const GDAOrganizeInfo = lazy(() => import('./Articles/GDAOrganizeInfo'))
const GDAOrganizeInfoSchool = lazy(() => import('./Articles/GDAOrganizeInfoSchool'))
const GDAOrganizeInfoSchool2 = lazy(() => import('./Articles/GDAOrganizeInfoSchool2'))
const GDAApplicationForm = lazy(() => import('./GDAApplicationForm'));
const Statement200821 = lazy(() => import('./Articles/Statement200821'))
const GDCAJoin = lazy(() => import('./GDCAJoin'))
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
              <Route path='/gdca-demand'>
                <GDADemand />
              </Route>
              <Route path='/gdca-participants-info'>
                <GDAParticipantInfo />
              </Route>
              <Route path='/statement-2020-08-21'>
                <Statement200821 />
              </Route>
              <Route path='/gdca-action-guide'>
                <GDAOrganizeInfo />
              </Route>
              <Route path='/gdca-action-guide-school'>
                <GDAOrganizeInfoSchool />
              </Route>
              <Route path='/gdca-action-guide-university'>
                <GDAOrganizeInfoSchool2 />
              </Route>
              <Route path='/press-release-200821'>
                <PressRelease200821 />
              </Route>
              <Route path='/gdca-join'>
                <GDCAJoin />
              </Route>
            </Switch>
          </ScrollTop>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
