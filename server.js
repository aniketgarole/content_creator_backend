
const express = require("express");
const cors = require("cors")
const { jokeRouter } = require("./routes/joke.route");
const { shayariRouter } = require("./routes/shayari.route");
const { quoteRouter } = require("./routes/quote.route");
const { storyRouter } = require("./routes/story.route");

const app = express()

app.use(express.json())

// app.use(cors())

// app.use((req, res, next) => {
//   //allow access to current url. work for https as well
//   res.setHeader('Access-Control-Allow-Origin',req.header('Origin'));
//   res.removeHeader('x-powered-by');
//   //allow access to current method
//   res.setHeader('Access-Control-Allow-Methods',req.method);
//   res.setHeader('Access-Control-Allow-Headers','Content-Type');
//   next();
// })

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use("/", jokeRouter)

app.use("/", shayariRouter)

app.use("/", quoteRouter)

app.use("/", storyRouter)








app.listen(8080, () => {
  console.log("Server is running at port 8080")
})