import React, { useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Popup from "./Popup";
import { useForm } from "react-hook-form";

function BoardCreate() {
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const [popup, setPopup] = useState({
    open: false,
    motitle: "",
    message: "",
    callback: false,
    color: "",
    del: false,
  });

  const redirect = () => {
    history.push("/");
  };

  const onSubmit = (data) => {
    axios
      .post("http://lukeboard.herokuapp.com/board", {
        title: data.title,
        author: data.author,
        date: dateString,
        desc: data.desc,
        pw: data.pw,
      })
      .then(
        setPopup({
          open: true,
          motitle: "성공",
          message: "게시글 작성이 완료되었습니다.",
          callback: redirect,
          color: "primary",
        })
      );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <h2>게시글 작성</h2>
      </div>
      <InputGroup className="mb-2">
        <InputGroup.Text>이름</InputGroup.Text>
        <FormControl type="text" {...register("author")} />
      </InputGroup>
      <InputGroup className="mb-2">
        <InputGroup.Text>암호</InputGroup.Text>
        <FormControl type="password" {...register("pw")} />
        <InputGroup.Text>암호 확인</InputGroup.Text>
        <FormControl type="password" {...register("pwre")} />
      </InputGroup>
      <InputGroup className="mb-2">
        <InputGroup.Text>제목</InputGroup.Text>
        <FormControl type="text" {...register("title")} />
      </InputGroup>
      <InputGroup className="mb-2">
        <InputGroup.Text>내용</InputGroup.Text>
        <FormControl
          as="textarea"
          {...register("desc")}
          style={{ height: "10rem", resize: "none" }}
        />
      </InputGroup>
      <Button variant="primary" className="float-end" type="submit">
        등록
      </Button>
      <Button
        variant="outline-secondary float-end me-2"
        onClick={() => history.push("/")}
      >
        취소
      </Button>
      <Popup popup={popup} setpopup={setPopup} />
    </form>
  );
}

export default BoardCreate;
