import styled from "styled-components";

const ButtonS = styled.button`
  color: ${({ esra }) => (esra ? "blue" : "red")};
  background-color: ${({ esra, cihan }) =>
    esra ? "Lightblue" : cihan ? "blue" : "orange"};
  cursor: pointer;
  padding: 1rem 1.5rem;
  border-radius: 5px;
  font-family: "tahoma";
  font-size: 30px;
  &:hover {
    transform: scale(0.95);
  }
`;

export const TomatoButton = styled(ButtonS)`
  width: 300px;
  background-color: aquamarine;
  color: ${({ murat }) => (murat ? "tomato" : "green")};
`;

export default ButtonS;
