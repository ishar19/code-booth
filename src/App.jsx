import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Submission from './pages/Submission'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/submit" element={<Submission/>}/>
    </Routes>
  );
}

export default App;
