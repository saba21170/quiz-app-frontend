import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listQuiz } from "./actions";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup } from "react-bootstrap";
 import  "./quizCreator.css";

function QuizList() {
  const [quizList, setQuizList] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listQuiz());
  }, []);

  const quizzes = useSelector((state) => state.quiz.list);

  useEffect(() => {
    if (quizzes) {
      setQuizList(quizzes.data);
    }
  }, [quizzes]);

  return (
    <div className="quiz-list-container">
      <h2 className="quiz-list-header">Available Quizzes</h2>
      <ListGroup>
        {quizList && quizList.length > 0 ? (
          quizList.map((quiz,index) => (
            <ListGroup.Item
              key={quiz._id}
              action
              href={`/quiz/${quiz._id}`}
              className="quiz-list-item"
            >
              <div
                className="quiz-title"
              >{index + 1} {""} 
                {quiz.title}
              </div>
            </ListGroup.Item>
          ))
        ) : (
          <p className="no-quizzes-msg">No quizzes available</p>
        )}
      </ListGroup>
    </div>
  );
}

export default QuizList;
