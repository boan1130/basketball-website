import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">中華隊籃球夢</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:text-blue-200">首頁</a></li>
            <li><a href="#schedule" className="hover:text-blue-200">賽程</a></li>
            <li><a href="#team" className="hover:text-blue-200">球隊</a></li>
            <li><a href="#news" className="hover:text-blue-200">新聞</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;