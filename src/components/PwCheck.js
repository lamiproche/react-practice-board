import React, { useRef, useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import readHook from "../hooks/readHook";
import Popup from "./Popup";

function PwCheck({ location }) {
  const { id } = location.state;
  const history = useHistory();
  const result = readHook(`http://lukeboard.herokuapp.com/board/${id}`);
  const pwRef = useRef(null);

  const back = () => {
    history.push(`/read/${id}`);
  };

  const [popup, setPopup] = useState({
    open: false,
    motitle: "",
    message: "",
    callback: false,
    color: "",
  });

  const confirm = () => {
    if (pwRef.current.value !== result.pw) {
      setPopup({
        open: true,
        motitle: "암호가 틀렸습니다.",
        message: "다시 한 번 확인해 주세요.",
        callback: false,
        color: "secondary",
      });
      return;
    }
    history.push({
      pathname: "/modify",
      state: { id: id },
    });
  };

  return (
    <>
      <Container>
        <Row className="justify-content-md-center mb-3">
          <Col lg="4" className="text-center">
            게시글 작성 시 작성하였던 암호를 입력하여 주세요.
          </Col>
        </Row>
        <Row className="justify-content-md-center mb-5">
          <Col lg="4">
            <Form.Control ref={pwRef} type="password" className="text-center" />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col lg="4">
            <div className="d-grid gap-2">
              <Button variant="primary" onClick={confirm}>
                확인
              </Button>
              <Button variant="outline-secondary" onClick={back}>
                뒤로가기
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Popup popup={popup} setpopup={setPopup} />
    </>
  );
}

export default PwCheck;
