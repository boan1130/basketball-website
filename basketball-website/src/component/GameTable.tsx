import React from 'react';
import { Game } from '../interface/types';

interface GameTableProps {
  games: Game[];
}

const GameTable: React.FC<GameTableProps> = ({ games }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4">日期</th>
            <th className="py-2 px-4">時間</th>
            <th className="py-2 px-4 text-right">主隊</th>
            <th className="py-2 px-4 text-center">對戰</th>
            <th className="py-2 px-4">客隊</th>
            <th className="py-2 px-4">比分</th>
            <th className="py-2 px-4">場地</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game) => (
            <tr key={game.id} className="border-b hover:bg-gray-50">
              <td className="py-2 px-4">{game.date}</td>
              <td className="py-2 px-4">{game.time}</td>
              <td className="py-2 px-4 text-right">{game.homeTeam}</td>
              <td className="py-2 px-4 text-center">vs</td>
              <td className="py-2 px-4">{game.awayTeam}</td>
              <td className="py-2 px-4">
                {game.homeScore !== null && game.awayScore !== null
                  ? `${game.homeScore} - ${game.awayScore}`
                  : 'null'}
              </td>
              <td className="py-2 px-4">{game.venue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GameTable;
