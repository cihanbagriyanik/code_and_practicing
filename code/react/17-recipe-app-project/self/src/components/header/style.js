import styled from "styled-components";

const Button = styled.button`
  width: 100px;
  border: none;
  border-radius: 5px;
  background-color: #e1f1dd;
  transition: all 0.3s ease-in 0s;
  &:hover {
    background-color: #00adb5;
    border: 1px solid white;
  }
`;

export const FormDiv = styled.div`
  /* border: 2px solid white; */
  padding: 5px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  
`;

export default Button;
