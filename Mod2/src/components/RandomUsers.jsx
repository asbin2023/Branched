import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { TopicArr } from "../misc/TopicArr";
import { words } from "../misc/TopicArr";

console.log(words)
const RandomUsers = () => {
  async function randomSentence() {
    const response = await axios.get(
      "https://api.api-ninjas.com/v1/quotes?category=business&limit=10",
      {
        headers: { "X-Api-Key": "sLMPkjpKJEaY4m4wUfuduA==jrkx9E4YMD8JkjaS" },
      }
    );
    const data = await response.data;
    console.log(data);
  }
  useEffect(() => {
    // randomSentence();
  }, []);
  return (
    <div>
      <img src="https://thispersondoesnotexist.com/" width={100} alt="" />
    </div>
  );
};

export default RandomUsers;
