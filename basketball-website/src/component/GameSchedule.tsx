import React from 'react';
import GameTable from './GameTable';
import { Game } from '../interface/types';

const GameSchedule: React.FC = () => {
  const games: Game[] = [
    {
      id: 1,
      date: "2024/02/22",
      time: "19:00",
      homeTeam: "中華台北",
      awayTeam: "紐西蘭",
      homeScore: 69,
      awayScore: 89,
      venue: "紐西蘭勝",
    },
    {
      id: 2,
      date: "2024/02/25",
      time: "19:30",
      homeTeam: "菲律賓",
      awayTeam: "中華台北",
      homeScore: 106,
      awayScore: 53,
      venue: "菲律賓勝",
    },
    {
      id: 3,
      date: "2024/11/21",
      time: "19:00",
      homeTeam: "中國香港",
      awayTeam: "中華台北",
      homeScore: null,
      awayScore: null,
      venue: "TBD",
    },
    {
      id: 4,
      date: "2024/11/25",
      time: "14:00",
      homeTeam: "中華台北",
      awayTeam: "紐西蘭",
      homeScore: null,
      awayScore: null,
      venue: "TBD",
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">亞洲盃資格賽</h2>
      <GameTable games={games} />
    </div>
  );
};

export default GameSchedule;
