import React from 'react'
import styled from 'styled-components'

export default = styled(hr)
`
  border-bottom: solid 2px ${props => props.theme.lime};
`
