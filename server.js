const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const port = 3000;
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

//user connected
io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("chat message", message => {
    console.log(`message: ${message}`);
    io.emit("chat message", message);
  });
});

http.listen(port, () => {
  console.log(`click here http://localhost:${port}`);
});
