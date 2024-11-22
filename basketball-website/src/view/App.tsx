import React, { useState } from 'react';
import Navigation from '../component/Navigation';
import TeamRoster from '../component/TeamRoster';
import GameSchedule from '../component/GameSchedule'; 
import News from '../component/News';
import ChineseTaipeiImage from '../assets/Chinese Taipei.jpg';
import { Player, Position } from '../interface/types';

const App: React.FC = () => {
 const [currentPage, setCurrentPage] = useState('home');

 const players: Player[] = [
   {
     id: 1,
     name: "陳盈駿",
     number: "9", 
     position: Position.PG,
     team: "北京首鋼",
     league: "CBA",
     height: "182cm"
   },
   {
     id: 2,
     name: "林庭謙",
     number: "0",
     position: Position.SG,
     team: "天津榮鋼先行者",
     league: "CBA", 
     height: "194cm"
   },
   {
     id: 3,
     name: "林秉聖",
     number: "3",
     position: Position.SG,
     team: "浙江廣廈",
     league: "CBA",
     height: "186cm"
   },
   {
     id: 4,
     name: "劉錚",
     number: "5",
     position: Position.SF,
     team: "上海大鯊魚",
     league: "CBA",
     height: "192cm"
   },
   {
     id: 5,
     name: "游艾喆",
     number: "7",
     position: Position.PG,
     team: "滋賀湖泊",
     league: "BLG",
     height: "183cm"
   },
   {
     id: 6,
     name: "阿巴西",
     number: "1",
     position: Position.SF,
     team: "秋田北部喜悅",
     league: "BLG",
     height: "189cm"
   },
   {
     id: 7,
     name: "曾祥鈞",
     number: "11",
     position: Position.C,
     team: "名古屋戰鷹",
     league: "BLG",
     height: "205cm"
   },
   {
     id: 8,
     name: "高錦瑋",
     number: "1",
     position: Position.PG,
     team: "台啤永豐雲豹",
     league: "TPBL",
     height: "173cm"
   },
   {
     id: 9,
     name: "盧峻翔",
     number: "39",
     position: Position.SG,
     team: "桃園璞園領航猿",
     league: "PLG",
     height: "188cm"
   },
   {
     id: 10,
     name: "馬建豪", 
     number: "2",
     position: Position.SF,
     team: "福爾摩沙夢想家",
     league: "TPBL",
     height: "201cm"
   },
   {
     id: 11,
     name: "胡瓏貿",
     number: "10",
     position: Position.PF,
     team: "高雄海神",
     league: "TPBL",
     height: "196cm"
   },
   {
     id: 12,
     name: "蘇士軒",
     number: "17",
     position: Position.PF,
     team: "新北國王",
     league: "TPBL",
     height: "194cm"
   },
   {
     id: 13,
     name: "陳冠全",
     number: "15",
     position: Position.PF,
     team: "台北台新戰神",
     league: "TPBL",
     height: "197cm"
   },
   {
     id: 14,
     name: "高柏鎧",
     number: "34",
     position: Position.C,
     team: "福爾摩沙夢想家",
     league: "TPBL",
     height: "213cm"
   },
   {
     id: 15,
     name: "周桂羽",
     number: "12",
     position: Position.SF,
     team: "台北富邦勇士",
     league: "PLG",
     height: "193cm"
   }
 ];

 const renderContent = () => {
   switch(currentPage) {
     case 'schedule':
       return <GameSchedule />;
     case 'team':
       return <TeamRoster players={players} />;
     case 'news':
       return <News />;
     default:
       return (
         <div className="text-center py-20">
           <h1 className="text-4xl font-bold mb-8">歡迎來到中華隊籃球夢</h1>
           <img 
             src={ChineseTaipeiImage}
             alt="中華隊"
             className="max-w-2xl mx-auto rounded-lg shadow-lg mb-8"
           />
           <p className="text-xl">一起為中華隊加油！</p>
         </div>
       );
   }
 };

 return (
   <div className="min-h-screen bg-gray-100">
     <Navigation onPageChange={setCurrentPage} />
     <main className="container mx-auto py-8">
       {renderContent()}
     </main>
   </div>
 );
};

export default App;