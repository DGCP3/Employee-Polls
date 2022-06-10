import {
  LOG_OUT,
  SET_ANSWERS,
  SET_QA_ERROR,
  SET_QA_LOADING,
  SET_QUESTIONS,
} from "../actions/types";

const initialState = {
  loading: false,
  error: false,
  answers: {},
  questions: [],
};

export default function QAreducer(state = initialState, action) {
  switch (action.type) {
    case SET_QA_LOADING:
      return { loading: true, ...state };
    case SET_QUESTIONS:
      return {
        ...state,
        questions: [...state.questions, ...action.payload],
        error: null,
        loading: false,
      };
    case SET_ANSWERS:
      return {
        ...state,
        answers: {
          ...state.answers,
          ...action.payload,
        },
        error: null,
        loading: false,
      };
    case SET_QA_ERROR:
      return { ...state, error: action.payload };
    case LOG_OUT:
      return {
        loading: false,
        error: false,
        answers: {},
        questions: [],
      };
    default:
      return state;
  }
}
