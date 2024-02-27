import { combineReducers } from "redux";
import quizReducer from "../components/quizCreator/reducers";

const rootReducer = combineReducers({
  addQuiz: quizReducer,
});

export default rootReducer;
