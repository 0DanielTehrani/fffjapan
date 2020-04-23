import React from 'react';
const largeSpace = '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0';
const NASU_CED_RESOLUTION='http://www.town.nasu.lg.jp/manage/contents/upload/5e702cfa43b39.pdf#search=`%E9%82%A3%E9%A0%88%E7%94%BA+%E6%B0%97%E5%80%99%E9%9D%9E%E5%B8%B8%E4%BA%8B%E6%85%8B%E5%AE%A3%E8%A8%80`'
const HAKUBA_CED='https://www.vill.hakuba.lg.jp/material/files/group/2/hakuba_climate_emergency_declaration.pdf';

const approaches = [
    {
      title: 'FFF東京',
      toWhom: '東京都',
      what: '気候非常事態宣言の発表を求めて請願',
      achievements: '2019年11月29日の環境委員会にて「継続審議」'
    },
    {
      title: 'FFF埼玉',
      toWhom: '埼玉県',
      what: '県議員の方との意見交換会の実施を目指して活動中',
      achievements: '2020年4月には対談する予定'
    },
    {
      title: '白馬高校生3名 ＆ Protect Our Winters Japan＆Hakuba SDGs Lab',
      toWhom: '長野県白馬村',
      what: '気候非常事態宣言を求める請願書と署名の提出',
      achievements: (<span>
        2019年12月4日、白馬村が気候非常事態宣言、その後、長野県や隣接する池田町、小谷村の気候非常事態宣言に波及 <br />
        <u><a href={HAKUBA_CED} target='_blank'>白馬村気候非常事態宣言</a></u>
        </span>)
    },

    {
      title: 'FFF静岡',
      toWhom: '静岡市',
      what: '議員さんとの意見交換',
      achievements: 'まだなし'
    },
    {
      title: 'FFF大阪',
      toWhom: '大阪府、大阪市、大阪府下全ての市町村',
      what: (<span>
        大阪市： <br />
        {largeSpace} 2019年6月気候非常事態宣言を求める請願 <br />
        大阪府・大阪府下の市町村： <br />
        {largeSpace} 議員さん、首長、行政の職員さんとの意見交換会や会議 <br />
        </span>),
      achievements: (<span>
        大阪市： <br />
        {largeSpace} 請願⇒2020年3月26日議員提案による気候非常事態宣言の決議が採択された <br />
        大阪府・大阪府下の市町村：<br />
        {largeSpace} 現在は準備段階であり大きな成果は得られていない
        </span>)
    },
    {
      title: 'FFF京都',
      toWhom: '京都市・京都府',
      what: (<span>
        京都市： <br />
        {largeSpace} 職員さんとの意見交換会の実施 <br />
        京都府： <br />
        {largeSpace} 職員さんへのアプローチ準備中 <br />
        </span>),
      achievements: (<span>
        京都市： <br />
        {largeSpace} 政策的対話の場の実現(2020年6月〜12月開催予定) <br />
        </span>)
    },
    {
      title: 'FFF熊本＆グローバル気候マーチ熊本',
      toWhom: '熊本市、熊本県',
      what: (<span>
        熊本市： <br />
        {largeSpace} 気候非常事態宣言を求める署名活動、市議会への陳情<br />
        熊本県： <br />
        {largeSpace} 県議会、民主連合の議員さんとの対話 <br />
        </span>),
      achievements: (<span>
        熊本市： <br />
        {largeSpace} 署名⇒1600筆<br />
        {largeSpace} 請願⇒現時点で気候非常事態宣言を出す予定なし<br />
        熊本県：<br />
        {largeSpace} 熊本県：気候危機に関する理解を深めていただいた<br />
        </span>)
    },
    {
      title: 'FFF鹿児島',
      toWhom: '鹿児島市環境政策課',
      what: '環境政策課の職員さんと意見交換 \n \
      鹿児島出身の国会議員さん、前鹿児島県知事、鹿児島市議会議員さん、自民党鹿児島県連会長さんと意見交換',
      achievements: '鹿児島市に後援になっていただいた'
    },
    {
      title: (<span>CEDを出そう！沖縄 <br />
        <span style={{ fontSize: '0.7em' }}>(ClimateStrikeOki 他、地方議員や複数の活動グループで結成)</span>
        </span>),
      toWhom: '沖縄県',
      what: '県議会議員さんとの意見交換の場を準備中',
      achievements: 'まだなし'
    }
];

export default approaches;
