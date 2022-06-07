import { LOGIN, LOG_OUT, SET_AUTH_LOADING } from "../actions/types";

const initialState = {
  isAuth: false,
  user: null,
  error: null,
  loading: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH_LOADING:
      return { ...state, loading: true };
    case LOGIN:
      return {
        loading: false,
        user: action.payload,
        error: null,
        isAuth: true,
      };
    case LOG_OUT:
      return { isAuth: false, user: null, error: null, loading: false };
    default:
      return state;
  }
}
