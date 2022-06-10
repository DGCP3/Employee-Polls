import { useSelector } from "react-redux";
import useBindActions from "./useBindActions";
import { authActions, qaActions, filterActions } from "../redux/actions";
import { loadLeaderboard } from "../redux/leaderboard";

export default function useReduxStore() {
  const store = useSelector((store) => store);

  const actions = useBindActions({
    ...authActions,
    ...qaActions,
    ...filterActions,
    loadLeaderboard,
  });
  return { store, ...actions };
}
