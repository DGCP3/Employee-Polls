import { useSelector } from "react-redux";
import { answerQuestion, createQuestion } from "../redux/actions/Q&A_Actions";
import { logout, userLogin } from "../redux/actions/authActions";
import useBindActions from "./useBindActions";
import { setFilter } from "../redux/actions/filterActions";

export default function useReduxStore() {
  const store = useSelector((store) => store);
  const actions = useBindActions({
    userLogin,
    logout,
    answerQuestion,
    createQuestion,
    setFilter,
  });
  return { store, ...actions };
}
