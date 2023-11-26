import styled from "styled-components";

const AboutMainDiv = styled.div`
  background-color: #00adb5;
  height: 100vh;
`;

export const CardDiv = styled.div`
  background-color: #e1f1dd;
`;

export const AboutLi = styled.li``;

export const AboutA = styled.a`
  text-decoration: none;
  color: #00adb5;
  cursor: pointer;

  &:hover {
    scale: 150%;
    transition: 0.5s;
  }
`;

export const AboutUl = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  font-size: 1.5rem;
  gap: 1rem;
`;

export const AboutButton = styled.button`
  background-color: #00adb5;
  padding: 0.5rem 1rem;
  margin: 0 1rem;
  border: 2px solid #00adb5;
  border-radius: 10px;
  color: white !important;
  

  &:hover {
    scale: 110%;
    transition: 0.5s;
    background-color: #02475e;
    opacity: 0.9;
  }
`;

export default AboutMainDiv;
