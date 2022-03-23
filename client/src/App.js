import "./App.css";
import { io } from "socket.io-client";
import Landingpage from "./components/landingPage";
import Chat from "./components/chat";
import Logo from "./components/logo";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

function App() {
  const [friendCode, setFriendCode] = useState("");
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const socket = io("localhost:5050");
  const navigate = useNavigate();

  useEffect(() => {
    socket.on("connect", () => {
      console.log(socket.id);
    });
    
    return () => {
      //unmount logic here
      console.log("unmount");
    };
  }, []);

  function sendMessage(newMessage) {
    setMessages([...messages, newMessage]);
    socket.emit(
      "send-message",
      JSON.stringify({
        targetCode: friendCode,
        content: newMessage,
      })
    );
  }

  function validateChatCode(code) {
    setFriendCode(code)
    navigate("chat");
  }

  return (
    <div className="App">
      <Logo />
      <Routes>
        <Route
          path="/"
          element={<Landingpage validateChatCode={validateChatCode} />}
        />
        <Route path="chat" element={<Chat sendMessage={sendMessage} messages={messages} />} />
      </Routes>
    </div>
  );
}

export default App;
