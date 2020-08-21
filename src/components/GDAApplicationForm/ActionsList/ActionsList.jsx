import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { useMediaQuery } from 'react-responsive'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const Container = styled.div
`
  overflow-x: scroll;
`

const StyledTable = styled(Table)
`
  padding: 0 20px;
  ${
    media.greaterThan('medium')`
      padding: 0 100px;
    `
  }
  font-family: ${props => props.theme.fontFamilyLight};
`

const StyledTableCellTime = styled(TableCell)
`
  min-width: 30px;
`

const StyledTableCellActionTitle = styled(TableCell)
`
  min-width: 200px;
`

const StyledTableCellOrg = styled(TableCell)
`
  min-width: 100px;
`

function ActionsList () {
  const rows = [{
    time: '未定',
    actionTitle: 'Climate Shoes Action',
    eventPageURL: 'https://www.facebook.com/events/1475809502623525?acontext=%7B%22source%22%3A5%2C%22action_history%22%3A[%7B%22surface%22%3A%22page%22%2C%22mechanism%22%3A%22main_list%22%2C%22extra_data%22%3A%22%5C%22[]%5C%22%22%7D]%2C%22has_source%22%3Atrue%7D',
    org: 'Fridays for Future Saitama'
  }
  ]
  
  return (
    <Container>
    <StyledTable>
      <TableHead>
        <TableRow>
          <StyledTableCellTime>時間</StyledTableCellTime>
          <StyledTableCellActionTitle>企画</StyledTableCellActionTitle>
          <StyledTableCellOrg>主催</StyledTableCellOrg>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          rows.map((row, i) => (
            <TableRow key={i}>
              <StyledTableCellTime>{row.time}</StyledTableCellTime>
              <StyledTableCellActionTitle><a href={row.eventPageURL} target="_blank">{row.actionTitle}</a></StyledTableCellActionTitle>
              <StyledTableCellOrg>{row.org}</StyledTableCellOrg>
            </TableRow>
          ))
        }
      </TableBody>
    </StyledTable>
    </Container>
    )
}

export default ActionsList;
