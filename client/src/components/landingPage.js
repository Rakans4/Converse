import React from "react";

const Landingpage = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className=" flex flex-col items-center justify-between h-80 w-[80%]">
        <div className="text-4xl">CODE01ABC</div>

        <form className="flex flex-col items-center">
          <input type="text" placeholder="enter a code..." className="h-12 w-max px-6 border-[0.5px] border-slate-300 rounded-3xl" />
          <button className="w-[70%] h-12 bg-yellow-200 rounded-3xl mt-6 hover:bg-yellow-400">Start a chat</button>
        </form>
      </div>
    </div>
  );
};

export default Landingpage;
