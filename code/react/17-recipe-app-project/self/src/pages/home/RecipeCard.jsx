import React from "react";
import { useCardContext } from "../../context/CardProvider";
import { useNavigate } from "react-router-dom";
import { MainCardDiv, CardH3, CardDiv, CardButton, CardImg } from "./style";

const RecipeCard = () => {
  const navigate = useNavigate();
  const { card } = useCardContext();
  // console.log(card);
  return (
    <MainCardDiv>
      {card.map((i) => {
        return (
          <CardDiv key={i?.recipe?.calories}>
            <CardH3> {i?.recipe?.label} </CardH3>
            <CardImg src={i?.recipe?.image} alt="" />
            <div>
              <CardButton onClick={() => navigate("/details", { state: { i } })}>
                {" "}
                View Recipe{" "}
              </CardButton>
            </div>
          </CardDiv>
        );
      })}
    </MainCardDiv>
  );
};

export default RecipeCard;
