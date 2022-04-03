import "./App.css";
import { io } from "socket.io-client";
import Landingpage from "./components/landingPage";
import Chat from "./components/chat";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

function App() {
  const [friendCode, setFriendCode] = useState("");
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  // const [socket, setSocket] = useState(io("localhost:5050"));
  const [myCode, setMyCode] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // socket.on("connect", () => {
    //   console.log(socket.id);
    // });

    // socket.on('incoming-message', (data)=>{receiveMessage(data.content)});

    
    // socket.on('code-register', (data)=>setMyCode(data))
    
    return () => {
      //unmount logic here
      console.log("unmount");
    };
  }, []);

  

  function sendMessage(newMessage) {
    setMessages([...messages, {content:newMessage, sent:1}]);
    console.log('friend: '+friendCode+' message: '+newMessage)
    // socket.emit(
    //   "send-message",
    //   JSON.stringify({
    //     targetCode: friendCode,
    //     content: newMessage,
    //   })
    // );
  }

  function receiveMessage(newMessage){
    console.log(messages)
    setMessages([...messages, {content:newMessage, sent:0}]);
  }

  function validateChatCode(code) {
    setFriendCode(code)
    navigate("chat");
  }

  return (
    <div className="App">
      
      <Routes>
        <Route
          path="/"
          element={<Landingpage myCode={myCode} validateChatCode={validateChatCode} />}
        />
        <Route path="chat" element={<Chat sendMessage={sendMessage} messages={messages} />} />
      </Routes>
    </div>
  );
}

export default App;
