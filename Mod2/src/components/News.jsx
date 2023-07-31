import { useState, useEffect } from "react"
import '../styles/News.css'


const News = () => {
  const [news, setNews] = useState([])
  useEffect(() => {
    // getNews()
  }, [])
  async function getNews() {
    const response = await fetch(`https://newsdata.io/api/1/news?apikey=pub_269947ac696999a0b17c8127a9edb2a2980b4&language=en&q=revenu&country=us`)
    const data = await response.json()
    let arr = []
    for (let item of data.results) {
      console.log(item.title.length)

      arr.push(item)

    }
    console.log(arr)
    arr.splice(6)
    setNews(arr)
  }
  console.log(news)
  return (
    <div className="news-container">
      <h1>Branched News</h1>
      <ul>
        {news.length > 0 && news.map(item => {
          return <li key={crypto.randomUUID()}>
            <a href={item.link} rel="noreferrer" target="_blank">&bull; {item.title}</a><br /> <br />
          </li>
        })}
      </ul>
    </div>
  )
}

export default News



