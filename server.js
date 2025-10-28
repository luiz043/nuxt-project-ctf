// server.js
import { Server } from "socket.io";
import http from "http";

const server = http.createServer();
const io = new Server(server, {
  cors: {
    origin: "*", // permite qualquer origem, útil pra teste
  },
});

io.on("connection", (socket) => {
  console.log("✅ Cliente conectado:", socket.id);

  socket.emit("message", "blaaaaa");
  socket.on("join-room", (data) => {
    console.log("Cliente entrou na sala:", data);
  });
});

server.listen(3001, () => console.log("🚀 Socket.IO rodando em http://localhost:3001"));
