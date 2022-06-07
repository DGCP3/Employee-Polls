import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./routes/ProtectedRoutes";
import MainLayout from "./routes/MainLayout";
import LoginPage from "./routes/LoginPage";
import NewPoll from "./routes/NewPollPage";
import QuestionPage from "./routes/QuestionPage";
import Leaderboard from "./routes/LeaderboardPage";
import QuestionsPage from "./routes/QuestionsPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" index element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/questions" element={<QuestionsPage />} />
            <Route path="/questions/:question_id" element={<QuestionPage />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/add" element={<NewPoll />} />
            <Route path="*" element={<h1>404</h1>} />
          </Route>
          <Route path="/" element={<Navigate to={"/questions"} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
