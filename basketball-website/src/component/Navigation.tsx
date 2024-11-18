import React from 'react';

interface NavigationProps {
  onPageChange: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ onPageChange }) => {
  return (
    <nav className="bg-blue-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">中華隊籃球夢</h1>
        <ul className="flex space-x-6">
          <li><button onClick={() => onPageChange('home')} className="hover:text-blue-200">首頁</button></li>
          <li><button onClick={() => onPageChange('schedule')} className="hover:text-blue-200">賽程</button></li>
          <li><button onClick={() => onPageChange('team')} className="hover:text-blue-200">球隊</button></li>
          <li><button onClick={() => onPageChange('news')} className="hover:text-blue-200">新聞</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;