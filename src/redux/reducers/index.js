import { combineReducers } from "redux";
import leaderboardReducer from "../leaderboard";
import authReducer from "./authReducer";
import filterReducer from "./filterReducer";
import QAreducer from "./Q&AReducer";

export default combineReducers({
  auth: authReducer,
  QA: QAreducer,
  filter: filterReducer,
  leaderboard: leaderboardReducer,
});
