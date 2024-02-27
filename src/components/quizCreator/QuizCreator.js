// QuizCreator.js

import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./quizCreator.css"; // Import CSS file
import { useDispatch } from "react-redux";
import { createQuiz } from "./actions";

function QuizCreator() {
  const [quizData, setQuizData] = useState({
    title: "",
    questions: [{ question: "", options: ["", "", ""] }],
  });

  const handleQuestionChange = (index, value) => {
    const newQuestions = [...quizData.questions];
    newQuestions[index].question = value;
    setQuizData({ ...quizData, questions: newQuestions });
  };

  const handleOptionChange = (questionIndex, optionIndex, value) => {
    const newQuestions = [...quizData.questions];
    newQuestions[questionIndex].options[optionIndex] = value;
    setQuizData({ ...quizData, questions: newQuestions });
  };
  const handleAddQuestion = () => {
    setQuizData({
      ...quizData,
      questions: [
        ...quizData.questions,
        { question: "", options: ["", "", ""] },
      ],
    });
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(quizData, "data from submit");
    dispatch(createQuiz(quizData));
  };

  return (
    <div className="quiz-creator-container">
      <Form className="quiz-form">
        <h2 className="quiz-title">Create a New Quiz</h2>
        <Form.Group controlId="title">
          <Form.Label>Quiz Title:</Form.Label>
          <Form.Control
            type="text"
            value={quizData.title}
            onChange={(e) =>
              setQuizData({ ...quizData, title: e.target.value })
            }
          />
        </Form.Group>
        {quizData.questions.map((question, questionIndex) => (
          <div key={questionIndex}>
            <Form.Group controlId={`question-${questionIndex}`}>
              <Form.Label>Question:</Form.Label>
              <Form.Control
                className="question-input"
                type="text"
                value={question.question}
                onChange={(e) =>
                  handleQuestionChange(questionIndex, e.target.value)
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Options:</Form.Label>
              {question.options.map((option, optionIndex) => (
                <Form.Control
                  key={optionIndex}
                  className="option-input"
                  type="text"
                  value={option}
                  onChange={(e) =>
                    handleOptionChange(
                      questionIndex,
                      optionIndex,
                      e.target.value
                    )
                  }
                />
              ))}
            </Form.Group>
          </div>
        ))}
        <Button
          className="add-question-btn"
          variant="primary"
          type="button"
          onClick={handleAddQuestion}
        >
          Add Question
        </Button>
        <Button
          className="create-quiz-btn"
          variant="primary"
          type="submit"
          onClick={handleSubmit}
        >
          Create Quiz
        </Button>
      </Form>
    </div>
  );
}

export default QuizCreator;
