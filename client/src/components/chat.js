import React, { useState } from "react";

const Chat = ({sendMessage, messages}) => {
  const [newMessage, setNewMessage] = useState('');

  function senMessage(e) {
    e.preventDefault();
    console.log(newMessage);
    sendMessage(newMessage);
    setNewMessage('');
  }

  function handleMessage(e) {
    e.preventDefault();
    setNewMessage(e.target.value);
  }
  return (
    <div className="h-screen w-screen">
      <div>{messages.map(message => <div>{message.content}</div>)}</div>
      <form onSubmit={senMessage} className="absolute bottom-0">
        <input value={newMessage} onChange={handleMessage} type="text" placeholder="..." />
        <button type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 rotate-90"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Chat;
