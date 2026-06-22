import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <div data-theme="dark" className="w-full h-screen flex bg-[var(--bg)] text-white overflow-x-hidden overflow-y-hidden transition-all duration-200 ease">
      <div className="h-full relative flex flex-col justify-between flex-[3]">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/post" exact element={<CreatePost />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;