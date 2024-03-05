// DeleteButton.js
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Confetti from "react-confetti";

const Score = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const { submit } = useSelector((state) => state.quiz);
  const width = 500;
  const height = 800;
  const number = 800;

  const percentageScore = parseFloat(submit?.data.percentageScore);
  let value = 80;
  return (
    <>
      <Button
        variant="primary"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Check Result
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Your Result:
            {percentageScore >= value && (
              <Confetti width={width} height={height} numberOfPieces={number} />
            )}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>{submit?.data.percentageScore}</Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Score;
