const { SET_FILTER } = require("../actions/types");

const filterReducer = (state = "unanswered", action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload;
    default:
      return state;
  }
};

export default filterReducer;
