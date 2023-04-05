import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Submission from './pages/Submission'
import Leaderboard from './pages/Leaderboard'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/submit" element={<Submission/>}/>
      <Route path="/leaderboard" element={<Leaderboard/>}/>
    </Routes>
  );
}

export default App;
