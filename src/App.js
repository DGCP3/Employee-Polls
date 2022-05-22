import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { ProtectedRoute } from "./pages/ProtectedRoutes";
import QuestionList from "./pages/QuestionsList";
import Question from "./components/Question";
import Navbar from "./components/Navbar";
import NewPoll from "./pages/NewPoll";
import Leaderboard from "./pages/Leaderboard";

function App() {
  return (
    <Routes>
      <Route path="/login" index element={<Login />} />
      {/* protected routes */}
      <Route element={<ProtectedRoute />}>
        {/* Dashboard layout */}
        <Route element={<Navbar />}>
          <Route path="/questions" element={<QuestionList />} />
          <Route path="/questions/:id" element={<Question />} />
          <Route path="/leader" element={<Leaderboard />} />
          <Route path="/new" element={<NewPoll />} />
        </Route>
        <Route path="/" element={<Navigate to={"/questions"} />} />
        <Route path="*" element={<h1>404</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
