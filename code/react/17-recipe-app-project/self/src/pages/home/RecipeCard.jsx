import React from "react";
import { useCardContext } from "../../context/CardProvider";
import { useNavigate } from "react-router-dom";

const RecipeCard = () => {
  const navigate = useNavigate();
  const { card } = useCardContext();
  console.log(card);
  return (
    <div>
      {card.map((i) => {
        return (
          <div key={i?.recipe?.calories}>
            <h3> {i?.recipe?.label} </h3>
            <img src={i?.recipe?.image} alt="" />
            <button onClick={() => navigate("/details", {state: {i}})}> View Recipe </button>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeCard;
