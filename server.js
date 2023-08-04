
const express = require("express");
const cors = require("cors")
const { jokeRouter } = require("./routes/joke.route");
const { shayariRouter } = require("./routes/shayari.route");
const { quoteRouter } = require("./routes/quote.route");
const { storyRouter } = require("./routes/story.route");

const app = express()

app.use(express.json())

app.use(cors())

app.use("/", jokeRouter)

app.use("/", shayariRouter)

app.use("/", quoteRouter)

app.use("/", storyRouter)








app.listen(8080, () => {
  console.log("Server is running at port 8080")
})