import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Navbar from './components/Navbar';

function App() {
  return <div data-theme="dark" className="w-full h-full flex bg-[var(--bg)] text-[var(--text_primary)] overflow-x-hidden overflow-y-hidden transition-all duration-200 ease">
    <div className="h-full relative flex flex-col justify-between flex-[3]">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<CreatePost />} />
        </Routes>
      </BrowserRouter>
    </div>
  </div>;
}

export default App;
