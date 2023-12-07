import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import InputSearch from "../components/InputSearch";
import UserInfo from "../components/UserInfo";
import NotFound from "../assets/404.gif";
import { Image, Row } from "react-bootstrap";

const Home = () => {
  const [kisi, setKisi] = useState("");

  const getData = (a) => {
    fetch(`https://api.github.com/users/${a}`)
      .then((res) => res.json())
      .then((data) => setKisi(data));
  };

  return (
    <Container>
      <InputSearch getData={getData} />
      {kisi.message !== "Not Found" ? (
        <UserInfo kisi={kisi} />
      ) : (
        <Row className="justify-content-center h-25 w-100">
          <Image src={NotFound} className="h-25 w-50" alt="User not found" />
        </Row>
      )}
    </Container>
  );
};

export default Home;
