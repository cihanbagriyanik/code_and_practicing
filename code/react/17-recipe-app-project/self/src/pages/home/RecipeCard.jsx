import React from "react";
import { useCardContext } from "../../context/CardProvider";
import { useNavigate } from "react-router-dom";

const RecipeCard = () => {
  const navigate = useNavigate();
  const { card } = useCardContext();
  // console.log(card);
  return (
    <div className="">
      {card.map((i) => {
        return (
          <div className="" key={i?.recipe?.calories}>
            <h3> {i?.recipe?.label} </h3>
            <img src={i?.recipe?.image} alt="" />
            <div>
              <button onClick={() => navigate("/details", { state: { i } })}>
                {" "}
                View Recipe{" "}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeCard;
