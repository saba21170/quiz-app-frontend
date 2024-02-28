import { ADD_QUIZ, LIST_QUIZ,GET_BY_ID} from "../../redux/types";

const quizReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_QUIZ:
      return {
        ...state,
        add: action.payload,
      };
      case LIST_QUIZ:
      return {
        ...state,
        list: action.payload,
      };
      case GET_BY_ID:
      return {
        ...state,
        byId: action.payload,
      };
    default:
      return state;
  }
};
export default quizReducer;
