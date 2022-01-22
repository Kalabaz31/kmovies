import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom";

import Home from "./container/Home";

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
