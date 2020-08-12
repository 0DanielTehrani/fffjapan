import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { useMediaQuery } from 'react-responsive'

const Container = styled.div
`
  
  ${media.greaterThan('medium')`
  `}
`

function GoogleForm () {
  const isMobile = useMediaQuery({ query: '(max-width: 450px)' })
  
  return (
    <Container>
      <iframe 
        src="https://docs.google.com/forms/d/e/1FAIpQLSeiDePTYojIF3C5NJF8kSDsJJKiZOqLmtyqG-KBjHvENlQ7ow/viewform?embedded=true" 
        width="100%" 
        height={isMobile ? "3700" : "3100"} 
        frameborder="0" 
        marginheight="0" 
        marginwidth="0">読み込んでいます…</iframe>
    </Container>
  )
}

export default GoogleForm;
