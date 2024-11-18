import React from 'react';
import { Player } from '../interface/types';

interface TeamRosterProps {
  players: Player[];
}

const TeamRoster: React.FC<TeamRosterProps> = ({ players }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {players.map((player) => (
        <div key={player.id} className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2">{player.name}</h3>
          <p>球衣號碼: {player.number}</p>
          <p>位置: {player.position}</p>
          <p>球隊: {player.team}</p>
          <p>聯盟: {player.league}</p>
          <p>身高: {player.height}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamRoster;