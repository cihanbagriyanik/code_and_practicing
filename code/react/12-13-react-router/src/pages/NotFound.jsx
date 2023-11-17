import React from "react";
import resim from "../img/notFound.jpeg";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <img src={resim} width={400} alt="" />
      <button className="btn btn-danger" onClick={() => navigate("/")}>
        GO HOME
      </button>
    </Container>
  );
};

export default NotFound;
