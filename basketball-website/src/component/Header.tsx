import React from 'react';
import logo from '../src/assets/Chinese Taipei.jpg'; 

const Header: React.FC = () => {
  return (
    <header className="bg-blue-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          {/* 圖片顯示區域 */}
          <img 
            src={logo}
            alt="中華隊logo"
            className="h-16 w-16 object-contain rounded-full" 
          />
          <h1 className="text-2xl font-bold">中華隊籃球夢</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:text-blue-200">首頁</a></li>
            <li><a href="#schedule" className="hover:text-blue-200">賽程</a></li>
            <li><a href="#team" className="hover:text-blue-200">球員</a></li>
            <li><a href="#news" className="hover:text-blue-200">新聞</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
