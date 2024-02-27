import { ADD_QUIZ } from "../../redux/types";

const quizReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_QUIZ:
      return {
        ...state,
        add: action.payload,
      };
    default:
      return state;
  }
};
export default quizReducer;
