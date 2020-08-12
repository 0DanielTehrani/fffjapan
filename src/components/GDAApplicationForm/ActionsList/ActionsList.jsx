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

function ActionsList () {
  const rows = [
    {
      time: '全日',
      actionTitle: '企画企画企画',
      org: '主催主催主催',
    },
    {
      time: '全日',
      actionTitle: '企画企画企画',
      org: '主催主催主催',
    },
    {
      time: '全日',
      actionTitle: '企画企画企画',
      org: '主催主催主催',
    },
    {
      time: '全日',
      actionTitle: '企画企画企画',
      org: '主催主催主催',
    },
    {
      time: '全日',
      actionTitle: '企画企画企画',
      org: '主催主催主催',
    },
    {
      time: '全日',
      actionTitle: '企画企画企画',
      org: '主催主催主催',
    }
  ]

  return (
    <StyledTable>
      <TableHead>
        <TableRow>
          <TableCell>時間</TableCell>
          <TableCell>企画</TableCell>
          <TableCell>主催</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          rows.map((row, i) => (
            <TableRow key={i}>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.actionTitle}</TableCell>
              <TableCell>{row.org}</TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </StyledTable>
    )
}

export default ActionsList;
