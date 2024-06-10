import React, { useState, useEffect } from "react";
import GlobalStyle from "./styles/global";
import styled from "styled-components";
import Form from "./components/Form.js";
import Grid from "./components/Grid";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import io from "socket.io-client";
import "./styles/App.css";
import Chat from "./components/Chat";

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  position: relative;
`;

const Title = styled.h2``;

function App() {
  const [users, setUsers] = useState([]);
  const [showChat, setShowChat] = useState(false);
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [socket, setSocket] = useState(null);
  const [onEdit, setOnEdit] = useState(null);
  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8801");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  const joinRoom = () => {
    if (username.trim() === "" || room.trim() === "") {
      toast.error("Por favor, insira seu nome e seu ID para entrar no chat.");
      return;
    }
    setShowChat(true);
    const newSocket = io("http://localhost:8801");
    setSocket(newSocket);
    newSocket.emit("join_room", room);
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Container>
        <Title>USUÁRIOS</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
        <Grid setOnEdit={setOnEdit} users={users} setUsers={setUsers} />
      </Container>
      {showChat && <Chat socket={socket} username={username} room={room} />}
      {!showChat && (
        <div className="chat-inputs-container">
          <div className="chat-window">
            <div className="chat-header">
              <p>Entre com um número e um nome</p>
            </div>
            <div className="chat-body">
              <div className="message-container">
                <div className="message">
                  <div>
                    <div className="message-content">
                      <input
                        type="text"
                        value={username}
                        placeholder="Digite seu nome"
                        onChange={(event) => {
                          setUsername(event.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="message">
                  <div>
                    <div className="message-content">
                      <input
                        type="text"
                        value={room}
                        placeholder="Insira seu id"
                        onChange={(event) => {
                          setRoom(event.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="chat-footer">
              <button onClick={joinRoom}>Entrar no Chat</button>
            </div>
          </div>
        </div>
      )}
      <ToastContainer autoClose={3000} position="bottom-left" />
      <GlobalStyle />
    </>
  );
}

export default App;