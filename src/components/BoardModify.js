import React, { useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import readHook from "../hooks/readHook";
import axios from "axios";
import Popup from "./Popup";
import { useForm } from "react-hook-form";

function BoardModify({ location }) {
  const history = useHistory();
  const { id } = location.state;
  const result = readHook(`http://lukeboard.herokuapp.com/board/${id}`);
  const { title, desc } = result;
  const { register, handleSubmit } = useForm();

  const [popup, setPopup] = useState({
    open: false,
    motitle: "",
    message: "",
    callback: false,
    color: "",
    del: false,
  });

  const onSubmit = (data) => {
    axios
      .put(`http://lukeboard.herokuapp.com/board/${id}`, {
        ...result,
        title: data.title,
        desc: data.desc,
      })
      .then(
        setPopup({
          open: true,
          motitle: "성공",
          message: "수정이 완료되었습니다.",
          callback: redirect,
          color: "primary",
          del: false,
        })
      );
  };

  const onDelete = () => {
    setPopup({
      open: true,
      motitle: "다시 한 번 확인해주세요",
      message: "정말로 삭제하시겠습니까?",
      callback: startDelete,
      color: "danger",
      del: true,
    });
  };

  const startDelete = () => {
    axios.delete(`http://lukeboard.herokuapp.com/board/${id}`).then(
      setPopup({
        open: true,
        motitle: "성공",
        message: "삭제가 완료되었습니다.",
        callback: redirect,
        color: "primary",
        del: false,
      })
    );
  };

  const redirect = () => {
    history.push("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <h2>게시글 수정</h2>
      </div>
      <InputGroup className="mb-2">
        <InputGroup.Text>제목</InputGroup.Text>
        <FormControl type="text" defaultValue={title} {...register("title")} />
      </InputGroup>
      <InputGroup className="mb-2">
        <InputGroup.Text>내용</InputGroup.Text>
        <FormControl
          as="textarea"
          defaultValue={desc}
          {...register("desc")}
          style={{ height: "10rem", resize: "none" }}
        />
      </InputGroup>
      <Button variant="danger float-start" onClick={onDelete}>
        삭제
      </Button>
      <Button variant="secondary" className="float-end" type="submit">
        수정
      </Button>
      <Button
        variant="outline-secondary float-end me-2"
        onClick={() => history.push(`/read/${id}`)}
      >
        취소
      </Button>
      <Popup popup={popup} setpopup={setPopup} />
    </form>
  );
}

export default BoardModify;
