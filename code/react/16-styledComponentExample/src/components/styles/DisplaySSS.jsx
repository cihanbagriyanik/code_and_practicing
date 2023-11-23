import styled from "styled-components";

const DisplaySSS = styled.div`
  background-color: lightblue;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: ${({ theme }) => theme.responsive}) {
    flex-direction: column;
  }
`;

export default DisplaySSS;
