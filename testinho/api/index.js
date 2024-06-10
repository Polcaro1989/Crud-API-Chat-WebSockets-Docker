import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import userRoutes from './routes/RotasUsuarios.js';
import cors from 'cors';
import sequelize from './db.js';

const app = express();
const server = http.createServer(app); 

app.use(express.json());
app.use(cors());

app.use('/', userRoutes);


const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", 
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`Usuário Conectado: ${socket.id}`);

  socket.on("join_room", (data) => {
    console.log(`Usuário com ID: ${socket.id} entrou na sala: ${data}`);
    socket.join(data);
  });
  socket.on("send_message", (data) => {
    console.log(`Mensagem recebida: ${data.message}`);
    console.log(`Emitindo mensagem para a sala ${data.room}`);
    socket.broadcast.to(data.room).emit("receive_message", data); // Emitir para todos, exceto o cliente atual
    console.log(`Mensagem enviada para a sala ${data.room}: ${data.message}`);
  });
  

  socket.on("disconnect", () => {
    console.log("Usuário Desconectado", socket.id);
  });
});

sequelize.sync().then(() => {
  console.log('Conexão com o banco de dados estabelecida com sucesso.');
  server.listen(8801, () => {
    console.log('Servidor iniciado na porta 8801');
  });
}).catch(error => {
  console.error('Erro ao conectar ao banco de dados:', error);
});