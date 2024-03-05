import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { quizById, submitQuiz } from "./actions";
import { Card, Button, Form, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Score from "./Score";

function Quiz() {
  const { id } = useParams();

  const [quiz, setQuiz] = useState();
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
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
    const checkOptions = quiz.questions.every(
      (question) => selectedOptions[question._id] !== undefined
    );
    if (checkOptions) {
      const submissionData = {
        quizId: id,
        responses: selectedOptions,
      };
      dispatch(submitQuiz(submissionData));
      setShowModal(true);
      setSelectedOptions({});
    } else {
      alert("Please answer all questions before submitting.");
    }
  };

  return (
    <>
      <div>
        {quiz ? (
          <div>
            <h1>{quiz.title}</h1>
            {quiz.questions.map((question, index) => (
              <Card key={question._id} className="mb-3">
                <Card.Body>
                  <Card.Title>
                    {question.question}
                    {question.index}
                  </Card.Title>
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

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Quiz Submitted Successfully👍:</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Score />
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Quiz;
