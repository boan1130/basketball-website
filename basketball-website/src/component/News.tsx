const News: React.FC = () => {
  const news = [
    {
      id: 1,
      title: "亞洲盃男籃資格賽台灣21日戰香港 阿巴西：準備好了",
      date: "2024-11-19",
      link: "https://udn.com/news/story/7003/8370355"
    },
    {
      id: 2,
      title: "亞洲盃資格賽》中華隊11/21主場迎戰香港 全隊「GO FOR IT」",
      date: "2024-11-13",
      link: "https://www.msn.com/zh-tw/sports/other/%E4%BA%9E%E6%B4%B2%E7%9B%83%E8%B3%87%E6%A0%BC%E8%B3%BD-%E4%B8%AD%E8%8F%AF%E9%9A%8A11-21%E4%B8%BB%E5%A0%B4%E8%BF%8E%E6%88%B0%E9%A6%99%E6%B8%AF-%E5%85%A8%E9%9A%8A-go-for-it/ar-AA1tZH4H?ocid=BingNewsVerp"
    },
    {
      id: 3,
      title: "亞洲盃資格賽》林志傑本季後退役 劉錚想親自到場祝福",
      date: "2024-11-13",
      link: "https://www.chinatimes.com/realtimenews/20241113004194-260403?chdtv"
    },
    {
      id: 4,
      title: "鄭世忠署長探視中華男籃 勉勵進軍2025亞洲盃會內賽",
      date: "2024-11-19",
      link: "https://udn.com/news/story/7003/8370355"
    },
    {
      id: 5,
      title: "亞洲盃資格賽》近年最強中華隊出擊 阿巴西：一直想要看到的陣容",
      date: "2024-11-13",
      link: "https://tw.news.yahoo.com/%E4%BA%9E%E6%B4%B2%E7%9B%83%E8%B3%87%E6%A0%BC%E8%B3%BD-%E8%BF%91%E5%B9%B4%E6%9C%80%E5%BC%B7%E4%B8%AD%E8%8F%AF%E9%9A%8A%E5%87%BA%E6%93%8A-%E9%98%BF%E5%B7%B4%E8%A5%BF-%E7%9B%B4%E6%83%B3%E8%A6%81%E7%9C%8B%E5%88%B0%E7%9A%84%E9%99%A3%E5%AE%B9-074549389.html"
    }
  ];

  return (
    <div className="grid gap-6">
      {news.map(item => (
        <div key={item.id} className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {item.title}
            </a>
          </h3>
          <p className="text-gray-500 mb-2">{item.date}</p>
        </div>
      ))}
    </div>
  );
};

export default News;
