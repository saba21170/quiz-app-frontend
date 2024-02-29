import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { quizById, submitQuiz } from "./actions";
import { Card, Button, Form } from "react-bootstrap";

function Quiz() {
  const { id } = useParams();

  const [quiz, setQuiz] = useState();
  const [selectedOptions, setSelectedOptions] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(quizById(id));
  }, [id]);

  const data = useSelector((state) => state.quiz.byId);

  useEffect(() => {
    if (data) {
      setQuiz(data.data);
    }
  }, [data]);

  const handleOptionChange = (questionId, optionIndex) => {
    setSelectedOptions({
      ...selectedOptions,
      [questionId]: optionIndex,
    });
  };

  const handleSubmit = () => {
    const submissionData = {
      quizId: id,
      responses: selectedOptions,
    };

    dispatch(submitQuiz(submissionData));
  };

  return (
    <div>
      {quiz ? (
        <div>
          <h1>{quiz.title}</h1>
          {quiz.questions.map((question) => (
            <Card key={question._id} className="mb-3">
              <Card.Body>
                <Card.Title>{question.question}</Card.Title>
                <Form>
                  {question.options.map((option, index) => (
                    <Form.Check
                      key={index}
                      type="radio"
                      id={`option-${index}`}
                      label={option}
                      checked={selectedOptions[question._id] === index}
                      onChange={() => handleOptionChange(question._id, index)}
                    />
                  ))}
                </Form>
              </Card.Body>
            </Card>
          ))}
          <Button variant="primary" onClick={handleSubmit}>
            Submit Quiz
          </Button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Quiz;
