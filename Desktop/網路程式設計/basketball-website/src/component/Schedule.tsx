// src/component/Schedule.tsx
import React from 'react';

const Schedule: React.FC = () => {
  const games = [
    {
      id: 1,
      date: "2024-02-20",
      home: "中華台北",
      away: "日本",
      venue: "新竹縣體育館",
      time: "19:00"
    }
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4">日期</th>
            <th className="py-2 px-4">時間</th>
            <th className="py-2 px-4">主隊</th>
            <th className="py-2 px-4">客隊</th>
            <th className="py-2 px-4">場地</th>
          </tr>
        </thead>
        <tbody>
          {games.map(game => (
            <tr key={game.id} className="border-b hover:bg-gray-50">
              <td className="py-2 px-4">{game.date}</td>
              <td className="py-2 px-4">{game.time}</td>
              <td className="py-2 px-4">{game.home}</td>
              <td className="py-2 px-4">{game.away}</td>
              <td className="py-2 px-4">{game.venue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;