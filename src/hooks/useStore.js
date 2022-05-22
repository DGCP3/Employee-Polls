import { useSelector } from "react-redux";
import {
  setAnswersThunk,
  loginThunk,
  logout,
  createQuestionThunk,
} from "../redux/reducer";
import useBindActions from "./useBindActions";

export default function useStore() {
  const store = useSelector((store) => store);
  const actions = useBindActions({
    loginThunk,
    logout,
    setAnswersThunk,
    createQuestionThunk,
  });
  return { store, ...actions };
}
