import React from 'react';
import { Player } from '../interface/types';

import 周桂羽Photo from '../assets/players/周桂羽.jpg';
import 林秉聖Photo from '../assets/players/林秉聖.jpg';
import 林庭謙Photo from '../assets/players/林庭謙.jpg';
import 阿巴西Photo from '../assets/players/阿巴西.jpg';
import 胡瓏貿Photo from '../assets/players/胡瓏貿.jpg';
import 馬建豪Photo from '../assets/players/馬建豪.jpg';
import 高柏鎧Photo from '../assets/players/高柏鎧.jpg';
import 高錦瑋Photo from '../assets/players/高錦瑋.jpg';
import 陳冠全Photo from '../assets/players/陳冠全.jpg';
import 陳盈駿Photo from '../assets/players/陳盈駿.jpg';
import 游艾喆Photo from '../assets/players/游艾喆.jpg';
import 蘇士軒Photo from '../assets/players/蘇士軒.jpg';
import 曾祥鈞Photo from '../assets/players/曾祥鈞.jpg';
import 劉錚Photo   from '../assets/players/劉錚.jpg';
import 盧峻翔Photo from "../assets/players/盧峻翔.jpg";
const playerPhotos: { [key: string]: string } = {
  '周桂羽': 周桂羽Photo,
  '林秉聖': 林秉聖Photo,
  '林庭謙': 林庭謙Photo,
  '阿巴西': 阿巴西Photo,
  '胡瓏貿': 胡瓏貿Photo,
  '馬建豪': 馬建豪Photo,
  '高柏鎧': 高柏鎧Photo,
  '高錦瑋': 高錦瑋Photo,
  '陳冠全': 陳冠全Photo,
  '陳盈駿': 陳盈駿Photo,
  '游艾喆': 游艾喆Photo,
  '蘇士軒': 蘇士軒Photo,
  '曾祥鈞': 曾祥鈞Photo,
  '劉錚': 劉錚Photo,
  '盧峻翔': 盧峻翔Photo,
};

interface TeamRosterProps {
  players: Player[];
}

const TeamRoster: React.FC<TeamRosterProps> = ({ players }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {players.map((player) => (
        <div key={player.id} className="bg-white p-6 rounded-lg shadow">
          <img 
      src={playerPhotos[player.name]} 
      alt={player.name} 
      className="w-full h-[200px] object-contain rounded-lg mx-auto mb-4"  // 改成這樣
      />
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-center mb-3">{player.name}</h3>
            <div className="grid grid-cols-2 gap-2">
              <p className="text-gray-600">球衣號碼: <span className="text-black">{player.number}</span></p>
              <p className="text-gray-600">位置: <span className="text-black">{player.position}</span></p>
              <p className="text-gray-600">聯盟: <span className="text-black">{player.league}</span></p>
              <p className="text-gray-600">身高: <span className="text-black">{player.height}</span></p>
            </div>
            <p className="text-gray-600 pt-2">球隊: <span className="text-black">{player.team}</span></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamRoster;