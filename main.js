const express = require("express");
const app = express();

app.use("/", express.static(__dirname + "/pages"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/pages/index.html");
});

app.listen(3100, () => {
  console.log("Server is running on port 3100");
});
