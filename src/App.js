import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import CryptoDetail from "./pages/CryptoDetail";
const App = () => {
  return (
    <div className="font-heebo min-h-screen w-screen flex flex-col justify-start items-center">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crypto/:id" element={<CryptoDetail />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
