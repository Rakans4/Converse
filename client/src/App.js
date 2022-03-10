
import './App.css';
import { io } from "socket.io-client";

function App() {
  const socket = io("localhost:5050");

  socket.on("connect", () => {
    console.log(socket.id);
  });


  return (
    <div className="App">
    </div>
  );
}

export default App;
