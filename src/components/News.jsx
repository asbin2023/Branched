import { useState, useEffect } from "react";
import "../styles/News.css";
import { useSelector } from "react-redux";

const News = () => {
  const userInfo = useSelector((state) => state.form);
  const [news, setNews] = useState([]);
  useEffect(() => {
    getNews();
  }, []);
  async function getNews() {
    let apiKey = import.meta.env.VITE_APP_NEWS_API_KEY;
    const response = await fetch(
      `https://newsdata.io/api/1/news?apikey=${apiKey}&q=revenu&country=us`
    );
    const data = await response.json();
    let arr = [];
    for (let item of data.results) {
      arr.push(item);
    }
    setNews(arr);
  }

  return (
    userInfo.length > 0 && (
      <div className="news-container">
        <h1>Branched News</h1>
        <ul>
          {news.length > 0 &&
            news.map((item) => {
              return (
                <li key={crypto.randomUUID()}>
                  <a href={item.link} rel="noreferrer" target="_blank">
                    &bull; {item.title}
                  </a>
                  <br /> <br />
                </li>
              );
            })}
        </ul>
      </div>
    )
  );
};

export default News;
