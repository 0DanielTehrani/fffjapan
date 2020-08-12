import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

const StyledTable = styled(Table)
`
  padding: 0 20px;
  font-family: ${props => props.theme.fontFamilyLight};
`

const StyledTr = styled(Tr)
`
  border-top: solid 1px;
`

const StyledTd = styled(Td)
`
`

const StyledTh = styled(Th) 
`
  text-align: left;
`

function ActionsList () {
  const rows = [
    {
      time: '全日',
      actionTitle: '企画名企画名主催',
      org: '主催主催主催',
    },
    {
      time: '全日',
      actionTitle: '企画名企画名主催',
      org: '主催主催主催',
    },
    {
      time: '全日',
      actionTitle: '企画名企画名主催',
      org: '主催主催主催',
    },
    {
      time: '全日',
      actionTitle: '企画名企画名主催',
      org: '主催主催主催',
    },
    {
      time: '全日',
      actionTitle: '企画名企画名主催',
      org: '主催主催主催',
    },
    {
      time: '全日',
      actionTitle: '企画名企画名主催',
      org: '主催主催主催',
    }
  ]

  return (
    <StyledTable>
      <Thead>
        <Tr>
          <StyledTh>時間</StyledTh>
          <StyledTh>企画</StyledTh>
          <StyledTh>主催</StyledTh>
        </Tr>
      </Thead>
      <Tbody>
        {
          rows.map((row, i) => (
            <>
            <StyledTr key={i}>
              <StyledTd>{row.time}</StyledTd>
              <StyledTd>{row.actionTitle}</StyledTd>
              <StyledTd>{row.org}</StyledTd>
            </StyledTr>
            <StyledTr >
              <hr/>
            </StyledTr>
            </>
          ))
        }
      </Tbody>
    </StyledTable>
    )
}

export default ActionsList;
