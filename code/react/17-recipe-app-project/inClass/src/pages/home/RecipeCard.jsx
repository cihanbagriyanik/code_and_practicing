import React from "react";
import {
  Button,
  Cards,
  MainContainer,
  RecipeHeader,
  RecipeImage,
} from "./HomeStyles";
import { useNavigate } from "react-router";

const RecipeCard = ({ recipes }) => {
  const navigate = useNavigate();
  return (
    <MainContainer>
      {recipes.map((a) => (
        <Cards key={a?.recipe?.calories}>
          <RecipeHeader> {a?.recipe?.label} </RecipeHeader>
          <RecipeImage src={a?.recipe?.image} />
          <Button onClick={() => navigate("/details", { state: { a } })}>
            {" "}
            Details{" "}
          </Button>
        </Cards>
      ))}
    </MainContainer>
  );
};

export default RecipeCard;
