import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import DivorcePage from "./DivorcePage";
import AddDivorcePage from "./AddDivorcePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/divorces" element={<DivorcePage />} />
        <Route path="/add-divorce" element={<AddDivorcePage />} />
      </Routes>
    </Router>
  );
}

export default App;
