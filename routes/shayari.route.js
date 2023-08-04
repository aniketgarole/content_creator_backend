const express = require("express")

const { getRes } = require("../openai");



const shayariRouter = express.Router()


shayariRouter.post("/shayari", async (req, res) => {
    try {
  
      const {keyword, language,topic} = req.body
      getRes(keyword, language,topic, res)
    } catch (error) {
      console.log(error)
    }
  })

 
  
  


  module.exports = {shayariRouter}