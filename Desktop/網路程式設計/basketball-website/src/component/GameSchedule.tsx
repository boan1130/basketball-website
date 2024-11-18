import React from 'react';
import { Game } from '../interface/types';

const GameSchedule: React.FC = () => {
 const games: Game[] = [
   {
     id: 1,
     date: "2024-02-20", 
     homeTeam: "中華台北",
     awayTeam: "日本",
     homeScore: 80,
     awayScore: 75,
     venue: "新竹縣體育館"
   }
 ];

 return (
   <div className="overflow-x-auto">
     <table className="min-w-full bg-white shadow-md rounded">
       <thead className="bg-gray-100">
         <tr>
           <th className="py-2 px-4">日期</th>
           <th className="py-2 px-4">主隊</th>
           <th className="py-2 px-4">客隊</th>
           <th className="py-2 px-4">比分</th>
           <th className="py-2 px-4">場地</th>
         </tr>
       </thead>
       <tbody>
         {games.map(game => (
           <tr key={game.id} className="border-b hover:bg-gray-50">
             <td className="py-2 px-4">{game.date}</td>
             <td className="py-2 px-4">{game.homeTeam}</td>
             <td className="py-2 px-4">{game.awayTeam}</td>
             <td className="py-2 px-4">
               {game.homeScore !== undefined && game.awayScore !== undefined
                 ? `${game.homeScore} - ${game.awayScore}`
                 : '未開始'
               }
             </td>
             <td className="py-2 px-4">{game.venue}</td>
           </tr>
         ))}
       </tbody>
     </table>
   </div>
 );
};

export default GameSchedule;