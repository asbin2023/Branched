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
for (let i = 0; i < 30; i++) {
  let num = Math.floor(Math.random() * TopicArr.length);
  words.push(TopicArr[num]);
}

export { words };
