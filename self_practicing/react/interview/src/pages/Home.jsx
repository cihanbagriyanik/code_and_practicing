import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import InputSearch from "../components/InputSearch";
import UserInfo from "../components/UserInfo";
import NotFound from "../assets/404.gif";
import { Image, Row } from "react-bootstrap";

const Home = () => {
  const [user, setUser] = useState("");
  useEffect(() => {
    fetch(`https://api.github.com/users/${user}`)
    // fetch('https://api.github.com/users/cihanbagriyanik')
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <Container>
      <InputSearch setUser={setUser} />
      <UserInfo />
      <Row className="justify-content-center h-25 w-100">
        <Image src={NotFound} className="h-25 w-50" alt="User not found" />
      </Row>
    </Container>
  );
};

export default Home;
