import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import { Helmet } from 'react-helmet'
import Desktop from './Desktop'
import Mobile from './Mobile'

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin-bottom: 6em;
`


function Header (props) {
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <StyledHeader>
      <Helmet>
          <title>世界気候アクション0925</title>
          <link id="faviconApple" rel="apple-touch-icon" sizes="180x180" href="gda/apple-touch-icon.png" />
          <link id="favicon32" rel="icon" type="image/png" sizes="32x32" href="gda/favicon-32x32.png" />
          <link id="favicon16" rel="icon" type="image/png" sizes="16x16" href="gda/favicon-16x16.png" />
      </Helmet>
      {
        isMobileOrTablet ?
        <Mobile />
        : <Desktop />
      }
    </StyledHeader>
  )
}

export default Header
