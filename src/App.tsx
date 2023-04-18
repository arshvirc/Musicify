import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { Navigation, Searchbar } from "./components";
import { Explore, Home } from "./pages";

function App() {
  return (
    <div className="relative flex">
      <Navigation />
      <div className="flex-1 flex flex-col bg-highlight">
        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/explore" element={<Explore />}></Route>
            </Routes>
          </div>
          <div className="xl:sticky relative top-0 h-fit"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
