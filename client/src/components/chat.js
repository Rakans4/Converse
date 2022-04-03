import React, { useState } from "react";

const Chat = ({ sendMessage, messages }) => {
  const [newMessage, setNewMessage] = useState("");

  console.log('chat render');

  function senMessage(e) {
    e.preventDefault();
    console.log(newMessage);
    sendMessage(newMessage);
    setNewMessage("");
  }

  function handleMessage(e) {
    e.preventDefault();
    setNewMessage(e.target.value);
  }
  return (
    <div className="h-screen w-screen pt-4">
      <div className="flex flex-col w-full">
        {messages.map((message) =>
          message.sent == 0 ? (
            <div className="h-max max-w-[70%] bg-yellow-200 rounded-3xl rounded-bl-none p-2 px-4 mb-3 mx-3 break-all">
              {message.content}
            </div>
          ) : (
            <div className="h-max max-w-[70%] bg-yellow-300 rounded-3xl rounded-br-none p-2 px-4 mb-3 mx-3 break-all self-end">
              {message.content}
            </div>
          )
        )}
      </div>
      <div className="absolute bottom-4 w-[22rem] p-2">
        <form onSubmit={senMessage} className="flex items-center">
          <input
            value={newMessage}
            onChange={handleMessage}
            type="text"
            placeholder="..."
            className="w-[90%] h-10 border-2 border-slate-400 rounded-3xl px-3"
          />
          <button type="submit" className="ml-3">
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
    </div>
  );
};

export default Chat;
