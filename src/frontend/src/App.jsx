import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Home  from "./pages/Home";
import Login from "./pages/Login";
import LoginSuccess from "./pages/LoginSuccess";
import Navbar from "./components/Navbar";


function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login-success" element={<LoginSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
