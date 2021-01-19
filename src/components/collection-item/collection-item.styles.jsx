import styled from "styled-components";
import { CustomButtonContainer } from "../../components/custom-button/custom-button.styles";

const backgroundImage = (props) => props.imageUrl;

export const ImageContainer = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  transition: opacity 0.1s ease-in-out;
  background-image: url(${backgroundImage});
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
`;
export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  width: 10%;
  margin-bottom: 15px;
`;

export const CollectionItemContainer = styled.div`
  width: 20vw;
  display: flex;
  flex-direction: column;
  height: 360px;
  align-items: center;
  position: relative;

  &:hover {
    ${ImageContainer} {
      opacity: 0.8;
    }

    ${CustomButtonContainer} {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    width: 40vw;
  }
`;
