import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { words } from "../misc/TopicArr";
import { useDispatch } from "react-redux";
import { handleAdd } from "../misc/quoteSlice";
let tempArr = [];

const RandomUsers = () => {
  const dispatch = useDispatch();
  const [quotes, setQuotes] = useState();
  async function randomSentence() {
    let apiKey = import.meta.env.VITE_APP_RANDOM_USERS_API_KEY;
    for (let i = 0; i < 10; i++) {
      const response = await axios.get(
        `https://api.api-ninjas.com/v1/quotes?category=${words[i]}`,
        {
          headers: { "X-Api-Key": apiKey },
        }
      );
      const data = await response.data;

      data.length > 0
        ? tempArr.push({
            author: data[0].author,
            quote: data[0].quote,
            headline: `${words[i]} Guru`,
          })
        : null;
    }
    setQuotes(tempArr);
  }

  useEffect(() => {
    randomSentence();
  }, []);

  useEffect(() => {
    quotes && dispatch(handleAdd(quotes));
  }, [quotes]);
};

export default RandomUsers;
