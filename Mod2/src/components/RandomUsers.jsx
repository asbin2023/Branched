import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { TopicArr } from "../misc/TopicArr";
import { words } from "../misc/TopicArr";
let tempArr = [];

const RandomUsers = () => {
  const [quotes, setQuotes] = useState();
  async function randomSentence() {
    for (let i = 0; i < 10; i++) {
      const response = await axios.get(
        `https://api.api-ninjas.com/v1/quotes?category=${words[i]}`,
        {
          headers: { "X-Api-Key": "sLMPkjpKJEaY4m4wUfuduA==jrkx9E4YMD8JkjaS" },
        }
      );
      const data = await response.data;

      data && tempArr.push({ author: data[0].author, quote: data[0].quote });
    }
    setQuotes(tempArr);
  }
  useEffect(() => {
    randomSentence();
  }, []);
  console.log(quotes);
  return (
    <div>
      {/* <img src="https://thispersondoesnotexist.com/" width={100} alt="" /> */}
    </div>
  );
};

export default RandomUsers;
