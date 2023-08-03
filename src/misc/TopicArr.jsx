export const TopicArr = [
  "age",
  "alone",
  "amazing",
  "anger",
  "architecture",
  "art",
  "attitude",
  "beauty",
  "birthday",
  "business",
  "car",
  "change",
  "communications",
  "computers",

  "courage",
  "dad",

  "death",
  "design",
  "dreams",
  "education",
  "experience",
  "failure",
  "faith",
  "family",
  "famous",
  "fear",
  "fitness",
  "food",
  "forgiveness",
  "freedom",
  "friendship",

  "future",

  "good",

  "graduation",
  "great",
  "happiness",
  "health",
  "home",

  "imagination",
  "inspirational",
  "intelligence",

  "knowledge",
  "learning",
  "life",

  "medical",

  "money",
  "morning",
  "movies",
  "success",
];

let words = [];
for (let i = 0; i < 20; i++) {
  let num = Math.floor(Math.random() * TopicArr.length);

  if (!words.includes(TopicArr[num])) {
    words.push(TopicArr[num]);
  } else {
    if (!words.includes(TopicArr[num + 1])) {
      words.push(TopicArr[num + 1]);
    } else {
      if (!words.includes(TopicArr[num + 2])) {
        words.push(TopicArr[num + 2]);
      }
    }
  }
}

export { words };
