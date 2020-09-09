import React from 'react'
import styled from 'styled-components'
import { withRouter, Link } from 'react-router-dom'
import headerImage from './header-image.png'
import MobileLinkItem from '../Header/MobileLinkItem'
import LinkMenu from '../LinkMenu'
import Text from '../Text'

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin-bottom: 6em;
`

const UpperHalfContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`


const StyledLogos = styled.div`
  & img:first-child {
    margin-right: 12px;
  }
`

const HeaderImage = styled.img
`
  width: 150px;
  height: auto;
`

function GDCAHeaderMobile (props) {
  const fontSize = '18px'
  const { pathname } = props.location
  return (
    <StyledHeader>
      <UpperHalfContainer>
          <StyledLogos>
            <HeaderImage src={headerImage} />
          </StyledLogos>
          <LinkMenu fontSize={fontSize}>
            {pathname !== '/' 
              && <MobileLinkItem fontSize={fontSize} to='/gdca-demand'>私たちがが求めること</MobileLinkItem>
            }
            {pathname !== '/gdca-join' 
              && <MobileLinkItem fontSize={fontSize} to='/gdca-join'>参加する</MobileLinkItem>
            }
            {pathname !== '/gda-application-form' 
              && <MobileLinkItem fontSize={fontSize} to='/gda-application-form'>企画する</MobileLinkItem>
            }
            {pathname !== '/' 
              && <MobileLinkItem fontSize={fontSize} to='/'>シェアパック</MobileLinkItem>
            }
            {pathname !== '/' 
              && <MobileLinkItem fontSize={fontSize} to='/'>賛同団体</MobileLinkItem>
            }
          </LinkMenu>
      </UpperHalfContainer>
    </StyledHeader>
  )
}

export default withRouter(GDCAHeaderMobile)
