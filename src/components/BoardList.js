import React from "react";
import { ListGroup } from "react-bootstrap";
import BoardContent from "./BoardContent";
import readHook from "../hooks/readHook";

function BoardList() {
  const result = readHook("http://lukeboard.herokuapp.com/board");

  return (
    <ListGroup as="ol">
      {result.length !== 0 ? (
        result.map((content) => (
          <BoardContent content={content} key={content.id} />
        ))
      ) : (
        <div>게시글이 존재하지 않습니다.</div>
      )}
    </ListGroup>
  );
}

export default BoardList;
