const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("This is home url ");
});

app.get("/product", (req, res) => {
  res.send("Our all products are available here");
});

const port = 3030;
app.listen(port, () => {
  console.log(`test server is runnint at http://localhost:${port} `);
});
