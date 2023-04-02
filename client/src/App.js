import {Routes, Route} from "react-router-dom"
import Home from "./components/Home/Home";
import Templates from "./components/Templates/Templates";
import Navbar from "./Navbar/navbar";

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path="/home" element={< Home/>} />
      <Route path="/temp" element={< Templates/>} />
     </Routes>
    </div>
  );
}

export default App;
