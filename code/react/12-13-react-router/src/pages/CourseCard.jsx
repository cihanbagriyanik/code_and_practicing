import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
//! react alanında döngü olarak sadece map desteklenir,condition lardan da sadece ternary desteklenir

import data from "../data.js";
import { useNavigate } from "react-router-dom";

const CourseCard = () => {
  const navigatee = useNavigate();

  //!alttaki ilk return react ın ekrana bastırılan kısmı
  return (
    <Container>
      <Row className="g-3 text-center ">
        {data.map(({ img, text, name, id }) => {
          //!arrow (map) süslü kullandığında return ister.reactta süslü koymayabilirsiniz, o zaman returne de ihtiyaç olmaz
          //?database den çekilen veriler ekrana bastırılırken, en dış div unique bir veri ister bunu da key={id} şeklinde yazarız. id olmak zorunda değil unique herhangi bir property olabilir, mesela img
          return (
            <Col
              className="d-flex justify-content-center col-sm-12 col-md-6 col-lg-4"
              key={id}
              // sm={12}
              // md={6}
              // lg={4}
            >
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>{text}</Card.Text>
                  <Button
                    variant="info"
                    onClick={() => navigatee(`/courses/${name}`)}
                  >
                    Detaylar
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default CourseCard;
