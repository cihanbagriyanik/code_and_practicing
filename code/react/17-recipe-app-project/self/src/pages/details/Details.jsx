import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useCardContext } from "../../context/CardProvider";
import { useLocation } from "react-router-dom";

const Details = () => {
  const { card } = useCardContext();
  const {
    state: { i },
  } = useLocation();
  return (
    <div className="container text-center">
      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" src={i?.recipe?.image} />
        <Card.Body>
          <Card.Title>{i?.recipe?.label}</Card.Title>
          <Card.Text>
            {card.map((i) => (
              <li>{i?.recipe?.ingredientLines}</li>
            ))}
          </Card.Text>
          <Button variant="primary" target="blank" href={i?.recipe?.url}>Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Details;
