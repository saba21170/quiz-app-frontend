import { ADD_QUIZ } from "../../redux/types";

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
  