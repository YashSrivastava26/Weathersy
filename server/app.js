const http = require("http");
const express = require("express");
const cors = require("cors");
const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3001;

app.use(express.static("client/build"));
app.get("/*", (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
});

// Listening to the server
server.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
