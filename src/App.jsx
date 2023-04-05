import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Submission from './pages/Submission'
import Leaderboard from './pages/Leaderboard'
import Admin from "./pages/Admin";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/submit" element={<Submission/>}/>
      <Route path="/leaderboard" element={<Leaderboard/>}/>
      <Route path="/adminxgdsc2023tnm" element={<Admin/>}/>
    </Routes>
  );
}

export default App;
