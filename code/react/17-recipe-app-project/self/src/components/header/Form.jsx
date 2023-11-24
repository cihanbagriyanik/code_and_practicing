import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useCardContext } from "../../context/CardProvider";


const MyForm = () => {
  const { setQuery, setMeal, getData } = useCardContext();
  return (
    <div>
      <Form className="w-75 m-auto" onSubmit={getData}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="search">
            <Form.Control
              type="search"
              placeholder="Search for Recipe"
              onChange={(e) => setQuery(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary w-25 h-25" type="submit">
            Search
          </Button>
          <Form.Group as={Col} controlId="meal">
            <Form.Select
              defaultValue="Choose..."
              onChange={(e) => setMeal(e.target.value)}
            >
              <option>Choose...</option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="snack">Snack</option>
              <option value="brunch">Brunch</option>
              <option value="teaTime">Tea Time</option>
            </Form.Select>
          </Form.Group>
        </Row>
      </Form>
    </div>
  );
};

export default MyForm;
