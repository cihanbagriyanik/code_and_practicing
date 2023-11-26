import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useCardContext } from "../../context/CardProvider";
import Buttonn, { FormDiv } from "./style";

const MyForm = () => {
  const { setQuery, setMeal, getData } = useCardContext();
  return (
    <FormDiv>
      <Form
        className="w-50 p-2 border border-3 border-white rounded"
        onSubmit={getData}
      >
        <Row>
          <Form.Group as={Col} controlId="search">
            <Form.Control
              type="search"
              placeholder="Search for Recipe"
              required
              onChange={(e) => setQuery(e.target.value)}
            />
          </Form.Group>
          <Buttonn variant="primary w-25 h-25" type="submit">
            Search
          </Buttonn>
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
    </FormDiv>
  );
};

export default MyForm;
