import { combineReducers } from "redux";
import quizReducer from "../components/quizCreator/reducers";

const rootReducer = combineReducers({
  quiz: quizReducer,
});

export default rootReducer;
