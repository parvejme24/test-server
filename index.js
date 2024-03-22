const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.get("/product", (req, res) => {
  res.send("This is pproduct pae");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
