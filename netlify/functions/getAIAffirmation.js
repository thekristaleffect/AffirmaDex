const fetch = require("node-fetch");

exports.handler = async function (event, context) {
  const apiKey = process.env.OPENAI_API_KEY;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{
        role: "user",
        content: "Give me a short magical affirmation from a fictional anime-style character. Include their name and the quote."
      }],
      temperature: 0.8,
      max_tokens: 100
    })
  });

  const data = await response.json();
  return {
    statusCode: 200,
    body: JSON.stringify(data.choices[0].message.content)
  };
};
