import React, { useContext } from "react";
import {
  Button,
  Cards,
  MainContainer,
  RecipeHeader,
  RecipeImage,
} from "./HomeStyles";
import { useNavigate } from "react-router";
import { RecipeContext } from "../../App";

// const RecipeCard = ({ recipes }) => {
const RecipeCard = () => {
  const { recipes } = useContext(RecipeContext);

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
