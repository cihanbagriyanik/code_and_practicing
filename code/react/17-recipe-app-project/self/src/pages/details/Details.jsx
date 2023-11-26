import React from "react";
import { useCardContext } from "../../context/CardProvider";
import { useLocation } from "react-router-dom";
import DetailsMainDiv, {
  DetailsUnderDiv,
  DetailsTitle,
  DetailsImg,
  DetailsButton,
  TextDiv,
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

        <DetailsButton
          className="mt-3"
          variant="primary"
          target="blank"
          href={i?.recipe?.url}
        >
          Go to Detail recipe
        </DetailsButton>
      </DetailsUnderDiv>

      <TextDiv>
        {card.map((i) => (
          <li className="mt-3" key={i?.recipe?.calories}>
            {i?.recipe?.ingredientLines}
          </li>
        ))}
      </TextDiv>
    </DetailsMainDiv>
  );
};

export default Details;
