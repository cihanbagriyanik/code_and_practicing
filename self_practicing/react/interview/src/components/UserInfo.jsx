import React from "react";
import { Col, Card, Button, Row } from "react-bootstrap";

const UserInfo = ({ kisi }) => {
  return (
    <Row xs={2} md={3} lg={3} className="mt-4 justify-content-center">
      {kisi && (
        <Col>
          <Card>
            <Card.Img variant="top" src={kisi.avatar_url} />
            <Card.Body>
              <Card.Text> {kisi.login} </Card.Text>
              <Button
                href={kisi.html_url}
                target="_blank"
                style={{ borderRadius: "50px" }}
                variant="primary"
              >
                VIEW PROFILE
              </Button>
            </Card.Body>
          </Card>
        </Col>
      )}
    </Row>
  );
};

export default UserInfo;
