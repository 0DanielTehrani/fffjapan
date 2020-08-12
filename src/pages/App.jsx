import React from 'react'
import { ThemeProvider } from 'styled-components'
import './App.css'
import '../i18n'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import ScrollTop from '../components/ScrollTop'
import Top from './Top'
import AboutUs from './AboutUs'
import FAQ from './FAQ'
import ToOrganizeForm from './ToOrganizeForm'
import PrivacyPolicy from './PrivacyPolicy'
import ApproachToGovernments from './ApproachToGovernments'
import Actions from './Actions'
import PressRelease200623 from './Articles/PressRelease200623'
import PressRelease200626 from './Articles/PressRelease200626'
import Opinion200626 from './Articles/Opinion200626'
import GDAApplicationForm from './GDAApplicationForm'

const theme = {
  textColor: '#007850',
  fontFamily: 'Noto Sans CJK jp, sans-serif',
  fontFamilyLight: 'Noto Sans CJK jp DemiLight, sans-serif',
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
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
