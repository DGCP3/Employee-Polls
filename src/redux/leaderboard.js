import { _getLeaderboard } from "../mock-api";

export default function leaderboardReducer(state = [], { type, payload }) {
  switch (type) {
    case "load_leaderboard":
      return [...payload];
    default:
      return state;
  }
}
const load = (payload) => ({ type: "load_leaderboard", payload });
export const loadLeaderboard = () => {
  return (dispatch) => {
    _getLeaderboard().then((res) => {
      const sorted = res.sort(
        (a, b) => b.answers + b.questions - (a.answers + a.questions)
      );
      dispatch(load(sorted));
    });
  };
};
