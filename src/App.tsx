import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="relative flex">
      <Navigation />
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse"></div>
      </div>
    </div>
  );
}

export default App;
