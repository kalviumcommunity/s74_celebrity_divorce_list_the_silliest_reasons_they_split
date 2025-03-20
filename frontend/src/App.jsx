import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import DivorcePage from "./DivorcePage";
import AddDivorcePage from "./AddDivorcePage";
import EditDivorcePage from "./EditDivorcePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/divorces" element={<DivorcePage />} />
        <Route path="/add-divorce" element={<AddDivorcePage />} />
        <Route path="/edit-divorce/:id" element={<EditDivorcePage />} />
      </Routes>
    </Router>
  );
}

export default App;
