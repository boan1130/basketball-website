import React, { useState } from 'react';
import Navigation from '../component/Navigation';
import TeamRoster from '../component/TeamRoster';
import GameSchedule from '../component/GameSchedule';
import News from '../component/News';
import { Player, Position } from '../interface/types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const players: Player[] = [
    {
      id: 1,
      name: "陳盈駿",
      number: "4",
      position: Position.PG,
      team: "北京首鋼",
      league: "CBA",
      height: "180cm"
    },
    {
      id: 2,
      name: "林庭謙",
      number: "3",
      position: Position.SG,
      team: "天津榮鋼先行者",
      league: "CBA",
      height: "190cm"
    }
    // ... 其他球員
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
            <h1 className="text-4xl font-bold mb-4">歡迎來到中華隊籃球夢</h1>
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