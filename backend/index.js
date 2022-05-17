//index.js will be actually a express server
const connectToMongo = require("./db");
const express = require("express");

connectToMongo();

const app = express();
const port = 5000;

//if we want to use req. body we should use middleware
app.use(express.json());

//Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.get("/", (_req, res) => {
  res.send("Hello Chitransh! 👋");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//javascript has asynchronous nature mongo connection wil take time itne mei niche ka code execute ho jayega and output de dega.
