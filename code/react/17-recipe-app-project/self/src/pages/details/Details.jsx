import React from "react";
import { useCardContext } from "../../context/CardProvider";
import { useLocation } from "react-router-dom";
import DetailsMainDiv, {
  DetailsUnderDiv,
  DetailsTitle,
  DetailsImg,
  DetailsButton,
  TextDiv,
  DetailsButtonA,
} from "./style";

const Details = () => {
  const { card } = useCardContext();

  const {
    state: { i },
  } = useLocation();

  return (
    <DetailsMainDiv>
      <DetailsUnderDiv>
        <DetailsTitle>{i?.recipe?.label}</DetailsTitle>
        <DetailsImg src={i?.recipe?.image} />
        <DetailsButton>
          <DetailsButtonA href={i?.recipe?.url} target="blank">Go to Detail recipe</DetailsButtonA>
        </DetailsButton>
      </DetailsUnderDiv>
      <TextDiv>
        {card.map((i) => (
          <li className="mb-2" key={i?.recipe?.calories}>
            {i?.recipe?.ingredientLines}
          </li>
        ))}
      </TextDiv>
    </DetailsMainDiv>
  );
};

export default Details;
