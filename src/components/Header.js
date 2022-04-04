import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const path = useLocation();

  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand className="fw-bold">
          <Link to="/" style={{ color: "black" }}>
            <span className="fw-light">(전혀 안)</span> 간단한ddddd 게시판
          </Link>
        </Navbar.Brand>
        {path.pathname !== "/create" && (
          <Navbar.Collapse className="justify-content-end">
            <Link to="/create">
              <Button variant="secondary" size="sm">
                게시글 작성
              </Button>
            </Link>
          </Navbar.Collapse>
        )}
      </Container>
    </Navbar>
  );
}

export default Header;
