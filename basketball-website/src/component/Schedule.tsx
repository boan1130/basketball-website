import React from 'react';

const Schedule: React.FC = () => {
  const firstStageGames = [
    {
      id: 1,
      date: "2024/02/22",
      time: "19:00",
      home: "中華台北",
      away: "紐西蘭",
      homeScore: 69,
      awayScore: 89,
      venue: "紐西蘭勝",
    },
    {
      id: 2,
      date: "2024/02/25",
      time: "19:30",
      home: "菲律賓",
      away: "中華台北",
      homeScore: 106,
      awayScore: 53,
      venue: "菲律賓勝",
    },
    {
      id: 3,
      date: "2024/11/21",
      time: "19:00",
      home: "中國香港",
      away: "中華台北",
      homeScore: null,
      awayScore: null,
      venue: "TBD",
    },
    {
      id: 4,
      date: "2024/11/25",
      time: "14:00",
      home: "中華台北",
      away: "紐西蘭",
      homeScore: null,
      awayScore: null,
      venue: "TBD",
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">亞洲盃資格賽</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4">日期</th>
              <th className="py-2 px-4">時間</th>
              <th className="py-2 px-4">主隊</th>
              <th className="py-2 px-4">比分</th>
              <th className="py-2 px-4">客隊</th>
              <th className="py-2 px-4">結果</th>
            </tr>
          </thead>
          <tbody>
            {firstStageGames.map((game) => (
              <tr key={game.id} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">{game.date}</td>
                <td className="py-2 px-4">{game.time}</td>
                <td className="py-2 px-4">{game.home}</td>
                <td className="py-2 px-4">
                  {game.homeScore !== null
                    ? `${game.homeScore} - ${game.awayScore}`
                    : "vs"}
                </td>
                <td className="py-2 px-4">{game.away}</td>
                <td className="py-2 px-4">{game.venue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schedule;
