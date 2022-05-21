import { useSelector } from "react-redux";
import { setAnswersThunk, loginThunk, logout } from "../redux/reducer";
import useBindActions from "./useBindActions";

export default function useStore() {
  const store = useSelector((store) => store);
  const actions = useBindActions({
    loginThunk,
    logout,
    setAnswersThunk,
  });
  return { store, ...actions };
}
