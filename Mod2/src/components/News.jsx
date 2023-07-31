import { useState, useEffect } from "react"
import '../styles/News.css'


const News = () => {
    const [news, setNews] = useState([])
    useEffect(()=>{
  //  getNews()
    }, [])
    async function getNews(){
        const response = await fetch(`https://newsdata.io/api/1/news?apikey=pub_269947ac696999a0b17c8127a9edb2a2980b4&language=en&q=revenu&country=us`)
        const data = await response.json()
        let arr = []
        for (let item of data.results){
          console.log(item.title.length)
          if (item.title.length < 70){
            arr.push(item)
          } 
        }
        console.log(arr)
        setNews(arr)
    }
    console.log(news)
  return (
    <div>
      <h1>LinkedIn News</h1>
      <ul>
       <li>News</li>
       <li>News</li>
       <li>News</li>
       <li>News</li>
       <li>News</li>
       <li>News</li>
      </ul>

    </div>
  )
}

export default News



//   return <li key={crypto.randomUUID()}>
//   <a href={item.link} rel="noreferrer" target="_blank">{item.title}</a>
// </li>
// })}