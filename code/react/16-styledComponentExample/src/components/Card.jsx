import React from "react";
import data from "../data";
import KartSSS from "./styles/KartSSS";
import ImageSSS from "./styles/ImageSSS";

const Card = () => {
  return (
    <div>
      {data.map((item) => (
        <KartSSS key={item.id} ferhat={item.id % 2 === 1 && "row-reverse"}>
          <div>
            <h2> {item.title} </h2>
            <p> {item.body} </p>
          </div>
          <ImageSSS src={`./images/${item.image}`} />
        </KartSSS>
      ))}
    </div>
  );
};

export default Card;
