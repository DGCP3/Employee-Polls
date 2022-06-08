import { _answerQuestion, _createQuestion } from "../../mock-api";
import {
  SET_ANSWERS,
  SET_QA_ERROR,
  SET_QA_LOADING,
  SET_QUESTIONS,
} from "./types";

const QAloading = () => ({ type: SET_QA_LOADING });
const setError = (payload) => ({ type: SET_QA_ERROR, payload });

export const setQuestions = (payload) => ({ type: SET_QUESTIONS, payload });
export const setAnswers = (payload) => ({ type: SET_ANSWERS, payload });

export const createQuestion = (options) => {
  return async (dispatch, getState) => {
    dispatch(QAloading());
    try {
      const {
        auth: {
          user: { id },
        },
      } = getState();
      console.log(id);
      const response = await _createQuestion(options, id);
      dispatch(setQuestions([response.id]));
    } catch (error) {
      setError(error);
    }
  };
};

export const answerQuestion = (_answer) => {
  return async (dispatch, getState) => {
    dispatch(QAloading());
    try {
      const {
        auth: {
          user: { id },
        },
        QA: { answers },
      } = getState();
      const response = await _answerQuestion(
        id,
        {
          answers: { ...answers, ..._answer },
        },
        Object.keys(_answer)[0]
      );
      dispatch(setAnswers(response?.answers));
    } catch (error) {
      setError(error);
    }
  };
};
