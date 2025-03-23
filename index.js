const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

//app.get("/", (req, res) => res.send("Hello World from AWS!"));

app.use(express.static(path.join(__dirname, "public")));

// Зареждай HTML файла от папка public
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "helloWorldAws.html"));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
