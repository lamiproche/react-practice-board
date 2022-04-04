import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function BoardContent({ content }) {
  const { id, title, author, date } = content;

  return (
    <ListGroup.Item
      as="ol"
      className="d-flex justify-content-between align-items-start"
      action
    >
      <div className="me-auto fw-bold">
        <Link to={`/read/${id}`} style={{ color: "black" }}>
          {title}
        </Link>
      </div>
      <div className="fw-normal me-3">{author}</div>
      <div className="vr" />
      <div className="fw-normal ms-3">{date}</div>
    </ListGroup.Item>
  );
}

export default BoardContent;
