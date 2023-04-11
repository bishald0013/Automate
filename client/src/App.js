import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./Navbar/navbar";
import SignUp from "./Auth/SignUp";
import Login from "./Auth/Login";
import "./App.css";
import Campaign from "./components/Home/Campaign";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/camp" element={<Campaign />} />
      </Routes>
    </div>
  );
}

export default App;
