import React from "react";
import { Modal, Button } from "react-bootstrap";

function Popup({ popup, setpopup }) {
  const { open, motitle, message, callback, color, del } = popup;

  const handleClose = () => {
    setpopup({ open: false });
    if (callback) {
      callback();
    }
  };

  const cancel = () => {
    setpopup({ open: false });
  };

  return (
    <Modal show={open} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header>
        <Modal.Title>{motitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        {del && (
          <Button variant="secondary" onClick={cancel}>
            아니요
          </Button>
        )}
        <Button variant={color} onClick={handleClose}>
          네
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Popup;
