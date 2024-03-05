import { ADD_QUIZ, LIST_QUIZ, GET_BY_ID, SUBMIT_QUIZ } from "../../redux/types";

export const createQuiz = (reqBody) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:5000/quiz/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reqBody),
      });
      const data = await response.json();

      dispatch({
        type: ADD_QUIZ,
        payload: data,
      });
    } catch (error) {
      console.error();
    }
  };
};

export const listQuiz = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:5000/quiz/getAll`);

      const data = await response.json();

      dispatch({
        type: LIST_QUIZ,
        payload: data,
      });
    } catch (error) {
      console.error();
    }
  };
};

export const quizById = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:5000/quiz/getById/${id}`);

      const data = await response.json();
      dispatch({
        type: GET_BY_ID,
        payload: data,
      });
    } catch (error) {
      console.error();
    }
  };
};

export const submitQuiz = (submitBody) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:5000/quiz/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitBody),
      });
      const data = await response.json();
      console.log(data,"submit quiz response")

      dispatch({
        type: SUBMIT_QUIZ,
        payload: data,
      });
    } catch (error) {
      console.error();
    }
  };
};
