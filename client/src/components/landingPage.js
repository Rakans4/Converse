import React, { useState } from "react";

const Landingpage = ({ validateChatCode }) => {
  const [code, setCode] = useState('')

  function handleCode(e) {
    e.preventDefault();
    setCode(e.target.value)
  }

  function submit(e) {
    e.preventDefault();
    validateChatCode(code);
    setCode('');
  }
    
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className=" flex flex-col items-center justify-between h-80 w-[80%]">
        <div className="text-4xl font-mono tracking-wide">CODE01ABC</div>

        <form onSubmit={submit} className="flex flex-col items-center">
          <input value={code} onChange={handleCode} type="text" placeholder="enter a code..." className="h-12 w-max px-6 border-[0.5px] border-slate-300 rounded-3xl" />
          <button type="submit" className="w-[70%] h-12 bg-yellow-200 rounded-3xl mt-6 hover:bg-yellow-400">Start a chat</button>
        </form>
      </div>
    </div>
  );
};

export default Landingpage;
