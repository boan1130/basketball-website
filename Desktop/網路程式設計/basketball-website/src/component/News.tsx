import React from 'react';

const News: React.FC = () => {
  const news = [
    {
      id: 1,
      title: "中華隊將參加2024亞洲盃資格賽",
      date: "2024-02-15",
      content: "中華隊即將出征2024年亞洲盃資格賽..."
    }
  ];

  return (
    <div className="grid gap-6">
      {news.map(item => (
        <div key={item.id} className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
          <p className="text-gray-500 mb-2">{item.date}</p>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default News;