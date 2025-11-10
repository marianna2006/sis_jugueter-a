import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Home  from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import LoginSuccess from "./pages/LoginSuccess";
import Navbar from "./components/Navbar";
import { AppFooter } from "./components/Footer";
import Contacts from "./pages/Contacts";
import Blogs from "./pages/Blogs";


function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login-success" element={<LoginSuccess />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <AppFooter></AppFooter>
    </BrowserRouter>
  );
}

export default App;
