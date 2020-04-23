import React from 'react';
const largeSpace = '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0';
const NASU_CED_RESOLUTION='http://www.town.nasu.lg.jp/manage/contents/upload/5e702cfa43b39.pdf#search=`%E9%82%A3%E9%A0%88%E7%94%BA+%E6%B0%97%E5%80%99%E9%9D%9E%E5%B8%B8%E4%BA%8B%E6%85%8B%E5%AE%A3%E8%A8%80`'

const approaches = [
    {
      title: 'FFF、グリーン連合、e-シフト、CAN-Japan、CYJ、JYPS',
      toWhom: '小泉環境大臣、環境省',
      what: 'COP25(国連気候変動枠組条約締約国会議)を迎えるにあたり、 \
      2019年11月27日に環境省が主催した意見交換会に他の環境団体と共に参加 \n \
      FFFの意見：私達はマーチを自分たちの未来のため、「マーチを開催せざるをえない状況にある」という思いから企画。 \
      日本には今変化が必要。科学者や「大人」によって気候変動によるリスクを既に特定し、 \
      被害は想定されていて、後は決断を下すのみであり、早急な決定を求めたい。',
      achievements: '小泉大臣からコメント：日本のFFFはグレタさんの活動をそのまま日本で行うだけではなく、 \
      日本から世界へと運動を広げられるものを'
    },
    {
      title: 'トランジション・タウン 文京',
      toWhom: '東京都文京区',
      what: '文京区に気候非常事態宣言を求める請願の署名集め \n \
      2020年6月の本会議に向けて、5月中の請願の提出を予定　',
      achievements: 'まだなし'
    },
    {
      title: 'FFF那須',
      toWhom: '栃木県那須町、那須塩原市',
      what: '那須町：気候非常事態宣言の請願 \n \
      那須塩原市：2050年CO2排出量実質ゼロ宣言後の具体的な戦略懇談会の申し入れ',
      achievements: (<span>
        那須町： <br />
        2020年2月12日 <br />
        {largeSpace}議会事務局に請願書を提出 <br />
        3月6日 <br />
        {largeSpace} 民生文教委員会 全会一致で否決 <br />
        {largeSpace} 議員提案による決議案 <br />
        3月16日 <br />
        {largeSpace} 那須町議会 気候非常事態宣言に関する議員提案を採択<br />
        <u><a href={NASU_CED_RESOLUTION} target='_blank'>那須町気候非常事態宣言に関する決議</a></u><br />
        ※気候非常事態宣言の採択が下野新聞、朝日新聞、毎日新聞に掲載される <br />
        那須塩原市：市長多忙につき実現せず
        </span>)
    },
    {
      title: 'FFF神戸',
      toWhom: '神戸市、兵庫県',
      what: (<span>
        神戸市：<br />
        {largeSpace} 議員さんとの意見交換会　<br />
        {largeSpace} 2020年2月から気候非常事態宣言を求める署名開始　<br />
        {largeSpace} 2020年3月19日 気候非常事態宣言を求める陳情を提出　<br />
        兵庫県： <br />
        {largeSpace} 意見交換会の実施　<br />
        {largeSpace} 気候非常事態宣言を求める陳情提出　<br />
        </span>),
      achievements: (<span>
        神戸市：<br />
          {largeSpace} 署名⇒オンライン含め1700筆 <br />
          {largeSpace} 陳情⇒審査打ち切り。2020年6月に再び陳情予定 <br />
          兵庫県： <br />
          {largeSpace} 陳情⇒2020年6月に審査予定 <br />
        </span>)
    },
    {
      title: 'FFF福岡',
      toWhom: '福岡県、福岡市、糸島市',
      what: (<span>
        福岡県： <br />
        {largeSpace} 2019年11月に知事宛の気候非常事態宣言を求める請願<br />
        福岡市： <br />
        {largeSpace} 2019年11月に市長宛の気候非常事態宣言を求める請願 <br />
        {largeSpace} 2020年6月に市議会に請願予定 <br />
        糸島市： <br />
        {largeSpace} 2020年6月に市議会に気候非常事態宣言の請願予定 <br />
        </span>),
      achievements: (<span>
        福岡県： <br />
        {largeSpace} 請願⇒陳情扱い<br />
        福岡市： <br />
        {largeSpace} 市長宛の請願⇒陳情扱い。予算委員会で議員さんに質問を代弁していただいた。<br />
        </span>)
    },
    {
      title: 'FFF大分＆チーム2℃',
      toWhom: '大分県、別府市',
      what: (<span>
        大分県： <br />
        {largeSpace} 気候非常事態宣言の請願の署名集め<br />
        {largeSpace} 請願を提出<br />
        別府市： <br />
        {largeSpace} 気候非常事態宣言の請願を提出 <br />
        </span>),
      achievements: (<span>
        大分県： <br />
        {largeSpace} 署名⇒600筆<br />
        {largeSpace} 請願⇒2020年3月気候非常事態宣言採択<br />
        別府市：<br />
        {largeSpace} 請願⇒2020年3月気候非常事態宣言採択<br />
        </span>)
    }
];

export default approaches;
