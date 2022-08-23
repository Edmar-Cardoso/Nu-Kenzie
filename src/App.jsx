import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./views/HomePage";
import Landing from "./views/Landing";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/homePage" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
