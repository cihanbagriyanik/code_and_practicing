
import React from 'react'

import {Card, Col, Row, Container} from "react-bootstrap"
/* -------------------------------------------------------------------------- */
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import Container from 'react-bootstrap/esm/Container';



//! react alanında döngü olarak sadece map desteklenir,condition lardan da sadece ternary desteklenir

const CourseCard = ({ data }) => {
  // console.log(props.data[0].name);
  // console.log(data);
  // console.log(data[0].name);


  return (
    <Container>
      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default CourseCard