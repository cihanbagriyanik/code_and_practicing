import styled from "styled-components";

const KartSSS = styled.div`
  background-color: aquamarine;
  border-radius: 15px;
  margin-bottom: 2rem;
  gap: 2rem;
  padding: 60px;
  display: flex;
  box-shadow: ${({theme}) => theme.golge};
  flex-direction: ${({ ferhat }) => ferhat || "row"};

  @media screen and (max-width: ${({theme})=> theme.responsive}) {
    background-color: pink;
    flex-direction:column ;
  }
`;

export default KartSSS;
