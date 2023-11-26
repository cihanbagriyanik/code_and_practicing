import styled from "styled-components";

const DetailsMainDiv = styled.div`
  /* border: 1px solid red; */
  background-color: #00adb5;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
`;

export const DetailsUnderDiv = styled.div`
  border: 1px solid red;
  width: 20rem;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-wrap: wrap;
`;
export const DetailsTitle = styled.h2`
  margin: 0.5rem 2rem;
  font-weight: 600;
`;
export const DetailsImg = styled.img`
  margin: 0rem 1rem;
  border-radius: 10px;
  position: relative;
`;
export const DetailsButton = styled.button`
  border: none;
  padding: 0.5rem 2rem;
  margin: 0rem 1.5rem;
  border-radius: 10px;
  background-color: #e1f1dd;
  &:hover {
    scale: 0.9;
    opacity: 0.9;
    transition: 0.5s;
  }
`;
export const TextDiv = styled.div`

`;

export default DetailsMainDiv;
