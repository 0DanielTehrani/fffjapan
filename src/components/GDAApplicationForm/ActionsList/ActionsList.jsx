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
  const rows = [
    {
      time: '',
      actionTitle: 'Climate Shoes Action',
      eventPageURL: 'https://www.facebook.com/events/1475809502623525?acontext=%7B%22source%22%3A5%2C%22action_history%22%3A[%7B%22surface%22%3A%22page%22%2C%22mechanism%22%3A%22main_list%22%2C%22extra_data%22%3A%22%5C%22[]%5C%22%22%7D]%2C%22has_source%22%3Atrue%7D',
      org: 'Fridays for Future Saitama'
    },
    {
      time: '17:30-18:30',
      actionTitle: '気候シューズアクションin松山',
      eventPageURL: 'https://www.facebook.com/events/258683988455366/?acontext=%7B%22event_action_history%22%3A[%7B%22extra_data%22%3A%22[]%22%2C%22mechanism%22%3A%22main_list%22%2C%22surface%22%3A%22main_list%22%7D%2C%7B%22extra_data%22%3A%22[]%22%2C%22mechanism%22%3A%22surface%22%2C%22surface%22%3A%22create_dialog%22%7D]%2C%22source%22%3A%225%22%7D',
      org: 'XR四国'
    },
    {
      time: '',
      actionTitle: '世界気候アクション',
      eventPageURL: '',
      org: '東京横浜ドイツ学園'
    },
    {
      time: '12:00-18:00',
      actionTitle: 'Fridays For Future | ＃シューズアクション',
      eventPageURL: 'https://bit.ly/3i1N75p',
      org: '個人'
    },
    {
      time: '',
      actionTitle: '“世界気候アクション0925” GLOBAL DAY OF CLIMATE ACTION',
      eventPageURL: '',
      org: 'バートンジャパン合同会社'
    },
    {
      time: '17:00-17:30',
      actionTitle: 'Burton Flagship Tokyo シューズアクション',
      eventPageURL: '',
      org: 'Burton Flagship Tokyo'
    },
    {
      time: '17:00-17:30',
      actionTitle: 'Burton Flagship Naganoシューズアクション',
      eventPageURL: '',
      org: 'Burton Flagship Nagano'
    },
    {
      time: '17:00-17:30',
      actionTitle: 'Burton Flagship Osakaシューズアクション',
      eventPageURL: '',
      org: 'Burton Flagship Osaka'
    },
    {
      time: '17:00-17:30',
      actionTitle: 'Burton Outlet Yokohamaシューズアクション',
      eventPageURL: '',
      org: 'Burton Outlet Yokohama'
    },
    {
      time: '16:00-17:00',
      actionTitle: '世界気候 アクション in Kanazawa',
      eventPageURL: '',
      org: 'Fridays For Future Kanazawa'
    },
    {
      time: '15:00-16:00',
      actionTitle: 'グローバル気候マーチ川崎',
      eventPageURL: 'https://www.facebook.com/profile.php?id=100055267324700',
      org: 'NPO法人アクト川崎'
    },
    {
      time: '16:00-17:00',
      actionTitle: '世界気候アクション0925 in Niigata',
      eventPageURL: '',
      org: 'FridaysForFuture Niigata'
    },
    {
      time: '',
      actionTitle: 'みんなでフォトアクション0925〜気候危機への想いをひとつに〜',
      eventPageURL: 'https://facebook.com/events/s/%E3%81%BF%E3%82%93%E3%81%AA%E3%81%A6%E3%83%95%E3%82%A9%E3%83%88%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B30925%E6%B0%97%E5%80%99%E5%8D%B1%E6%A9%9F%E3%81%B8%E3%81%AE%E6%83%B3%E3%81%84%E3%82%92%E3%81%B2%E3%81%A8%E3%81%A4%E3%81%AB/355964459111124/?ti=icl',
      org: 'Fridays for Future Kyoto '
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
              {
                row.eventPageURL?
                <StyledTableCellActionTitle><a href={row.eventPageURL} target="_blank">{row.actionTitle}</a></StyledTableCellActionTitle>
                :<StyledTableCellActionTitle>{row.actionTitle}</StyledTableCellActionTitle>
              }
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
