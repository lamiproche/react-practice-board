import React from "react";
import { Stack, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import readHook from "../hooks/readHook";

function BoardRead({ match }) {
  const history = useHistory();
  const { id } = match.params;
  const result = readHook(`http://lukeboard.herokuapp.com/board/${id}`);
  const { title, author, desc, date } = result;

  return (
    <>
      <Stack direction="horizontal" gap={2} className="mb-3">
        <h2>{title}</h2>
        <div className="ms-auto">{author}</div>
        <div>ㅣ</div>
        <div>{date}</div>
      </Stack>
      <div className="mb-2">
        <ListGroup>
          <ListGroupItem style={{ height: "10rem" }}>{desc}</ListGroupItem>
        </ListGroup>
      </div>
      <Link
        to={{
          pathname: "/check",
          state: { id },
        }}
      >
        <Button variant="secondary" className="float-end ms-2">
          수정
        </Button>
      </Link>
      <Button
        variant="outline-secondary"
        onClick={() => history.push("/")}
        className="float-end"
      >
        뒤로가기
      </Button>
    </>
  );
}

export default BoardRead;
