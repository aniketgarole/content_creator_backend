const express = require("express")

const { getRes } = require("../openai");



const jokeRouter = express.Router()


jokeRouter.post("/joke", async (req, res) => {
    try {
  
      const {keyword, language, topic} = req.body
      getRes(keyword, language,topic, res)
    } catch (error) {
      console.log(error)
    }
  })

 
  
  


  module.exports = {jokeRouter}