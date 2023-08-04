const { Configuration, OpenAIApi } = require("openai");

require('dotenv').config()


const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);


  const getRes = async(input,language,topic="anything", res) => {
    // console.log(input, language, topic)

    try {
      const result = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: `tell me ${input} about ${topic} in ${language}`}],
      });
    //   console.log(result.data.choices[0].message.content);
      res.status(200).json({"res": result.data.choices[0].message.content})
      
    } catch (error) {
      console.log(error)
      res.status(400).json({"err": error.message})
    }
   
  }
  

  module.exports = {getRes}