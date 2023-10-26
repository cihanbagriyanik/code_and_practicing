
import React from 'react'

import { Card, Col, Row, Container, Button } from "react-bootstrap"
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
    <Container className='mt-4'>
      <Row className="g-4 d-flex justify-content-center">

        {data.map(({img,text,name,id}) => {
          //! dest. map parantezinin icinde yapmak daha iyi yukardaki gibi suslu nun icinde
          {/* const {img,text,name,id} = eleman */}
          //! arrow (map) süslü kullandığında return ister.reactta süslü koymayabilirsiniz, o zaman returne de ihtiyaç olmaz
          return (
            <Col
              className='col-12 col-md-6 col-lg-4'
            //! React Bootstrap responsive ligi
            // xs={12}
            // // sm={12}
            // md={6}
            // lg={4}
            >
              <Card className='pt-3'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>
                    {text}
                  </Card.Text>
                  <Button variant='danger'>Detaylar</Button>
                </Card.Body>
              </Card>
            </Col>
          )

        })}

      </Row>
    </Container>
  )
}

export default CourseCard