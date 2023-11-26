import styled from "styled-components";
// import { CardDiv } from "./RecipeCard";

//! MainDiv from Home
const MainDiv = styled.div`
  background-color: #00adb5;
  height: 100%;
  min-height: 100vh;
`;

export default MainDiv;

//! Those are from RecipeCard
export const MainCardDiv = styled.div`
  /* border: 2px solid red; */
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  /* overflow: hidden; */
`;

export const CardDiv = styled.div`
  overflow: hidden;
  /* border: 2px solid red; */
  background-color: #e1f1dd;
  width: 20rem;
  margin: auto;
  margin-bottom: 1.5rem;
  margin: 1.5rem;
  border-radius: 10px;
`;

export const CardH3 = styled.h3`
  margin: 1rem;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardImg = styled.img`
  width: 55%;
  border-radius: 10px;

  overflow-clip-margin: content-box;
  overflow: clip;
`;

export const CardButton = styled.button`
  height: 2.5rem;
  background-color: #00adb5;
  border: none;
  border-radius: 10px;
  margin: 1rem;
  &:hover {
    scale: 90%;
    opacity: 0.9;
    transition: 0.5s;
  }
`;
