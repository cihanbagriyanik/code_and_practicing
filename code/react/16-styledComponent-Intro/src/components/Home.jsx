import React from "react";
import HeaderS, { LinkS } from "./style/HeaderStyle";
import DivStyle from "./style/ContainerStyle";
import ButtonS, { TomatoButton } from "./style/ButonStyle";

const Home = () => {
  return (
    <div>
      <DivStyle>
        <HeaderS>STYLED COMPONENTS</HeaderS>

        <LinkS href="#">LINK</LinkS>

        <ButtonS esra>TIKLA 1</ButtonS>
        <ButtonS cihan>TIKLA 2</ButtonS>
        <ButtonS>TIKLA 3</ButtonS>
        <TomatoButton>TIKLA 4</TomatoButton>
        <TomatoButton murat>TIKLA 4</TomatoButton>
      </DivStyle>
    </div>
  );
};

export default Home;
