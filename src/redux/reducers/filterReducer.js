const { SET_FILTER, LOG_OUT } = require("../actions/types");

const filterReducer = (state = "unanswered", action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload;
    case LOG_OUT:
      return "unanswered";
    default:
      return state;
  }
};

export default filterReducer;
