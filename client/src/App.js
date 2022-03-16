
import './App.css';
import { io } from "socket.io-client";
import Landingpage from './components/landingPage';
import Chat from './components/chat';

function App() {
  const socket = io("localhost:5050");

  socket.on("connect", () => {
    console.log(socket.id);
  });


  return (
    <div className="App">
      <Landingpage />
      {/* <Chat /> */}
    </div>
  );
}

export default App;
