import { _loginUser } from "../../mock-api";
import { setAnswers, setQuestions } from "./Q&A_Actions";
import { LOGIN, LOG_OUT, SET_AUTH_ERROR, SET_AUTH_LOADING } from "./types";

export const logout = () => ({ type: LOG_OUT });
const login = (payload) => ({ type: LOGIN, payload });
const setLoading = () => ({ type: SET_AUTH_LOADING });
const setError = (payload) => ({
  type: SET_AUTH_ERROR,
  payload,
});

export function userLogin(username, password) {
  return async (dispatch) => {
    dispatch(setLoading);
    const response = await _loginUser(username, password).catch(
      dispatch(setError)
    );
    const { answers, questions, ...rest } = response;
    dispatch(login(rest));
    dispatch(setAnswers(answers));
    dispatch(setQuestions(questions));
  };
}
