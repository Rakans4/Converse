
import './App.css';
import { io } from "socket.io-client";
import Landingpage from './components/landingPage';
import Chat from './components/chat';
import Logo from './components/logo';

function App() {
  // useEffect(()=>{
  //   const socket = io("localhost:5050");
  //   socket.on("connect", () => {
  //     console.log(socket.id);
  //   });

  //   socket.on('code-register', (data)=>{
  //     console.log(data)
  //   })

  //   return ()=>{
  //     //unmount logic here
  //     console.log('unmount')
  //   }
  // }, []);

  // socket.emit('send-message', JSON.stringify())

  function validateChatCode(e){
    e.preventDefault();
    console.log('from app.js '+e.target.firstChild.value);
}

  return (
    <div className="App">
      <Logo />
      <Landingpage validateChatCode={validateChatCode} />
      {/* <Chat /> */}
      
    </div>
  );
}

export default App;
