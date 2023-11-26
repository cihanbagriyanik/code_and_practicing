import styled from "styled-components";

const DetailsMainDiv = styled.div`
  background-color: #00adb5;
  height: 100%;
  min-height: 100vh;
`;

export const DetailsUnderDiv = styled.div`
  height: 29rem;
  width: 21rem;
  float: left;
`;

export const DetailsTitle = styled.h2`
  margin: 0.5rem 2rem;
  font-weight: 600;
`;

export const DetailsImg = styled.img`
  margin: 0rem 1rem;
  border-radius: 10px;
  /* position: relative; */
`;

export const DetailsButton = styled.button`
  border: none;
  padding: 0.5rem 2rem;
  margin: 1rem 1.5rem 0;
  border-radius: 10px;
  background-color: #e1f1dd;
  &:hover {
    scale: 0.9;
    opacity: 0.9;
    transition: 0.5s;
  }
`;

export const DetailsButtonA = styled.a`
  text-decoration: none;
  color: #02475e;
`;

export const TextDiv = styled.div`
  padding: 3rem 2rem;
`;

export default DetailsMainDiv;
