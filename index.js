const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

io.on("connection", () => {
    console.log("user connected");
});

http.listen(61032, () => {
    console.log("listening...");
});
