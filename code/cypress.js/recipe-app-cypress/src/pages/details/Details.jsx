import React from "react";
import { useLocation } from "react-router-dom";
import {
  DetailContainer,
  DetailPart,
  HeaderContainer,
  ImgContainer,
  IngredContainer,
  OtherPart,
} from "./DetailsStyles";
import dietsvg from "../../assets/diet.svg";
const Details = () => {
  const {
    state: { a },
  } = useLocation();

  return (
    <DetailContainer>
      <HeaderContainer>
        <h1>{a.recipe.label}</h1>
        <img src={dietsvg} alt="" />
      </HeaderContainer>

      <DetailPart>
        <OtherPart>
          <>Nutrients</>

          <p>
            {a.recipe.totalNutrients.CA.label}:
            {Math.round(a.recipe.totalNutrients.CA.quantity)}
            {a.recipe.totalNutrients.CA.unit}
          </p>
          <p>
            {a.recipe.totalNutrients.CHOCDF.label} :
            {Math.round(a.recipe.totalNutrients.CHOCDF.quantity)}
            {a.recipe.totalNutrients.CHOCDF.unit}
          </p>
          <p>
            {a.recipe.totalNutrients.CHOLE.label} :
            {Math.round(a.recipe.totalNutrients.CHOLE.quantity)}
            {a.recipe.totalNutrients.CHOLE.unit}
          </p>
          <p>
            {a.recipe.totalNutrients.ENERC_KCAL.label} :
            {Math.round(a.recipe.totalNutrients.ENERC_KCAL.quantity)}
            {a.recipe.totalNutrients.ENERC_KCAL.unit}
          </p>
          <p>{a.recipe.totalWeight}</p>
          <p>Calories: {Math.round(a.recipe.calories)}</p>
          {/* digest key i ile bize 29 elemanlı bir dizi geliyor, biz onun 4 elemanını bastırmak için slice kullandık */}
          <p>
            {a.recipe.digest.slice(0, 4).map((item, index) => (
              <p key={index}>
                {" "}
                {item.label}: {Math.round(item.total)}
              </p>
            ))}
          </p>
        </OtherPart>

        <ImgContainer>
          <img src={a.recipe.image} alt="" />
        </ImgContainer>

        <IngredContainer>
          {a.recipe.ingredientLines.map((item, index) => (
            <div key={index}>
              <p>
                {index + 1} * {item}
              </p>
            </div>
          ))}
        </IngredContainer>
      </DetailPart>
    </DetailContainer>
  );
};

export default Details;
