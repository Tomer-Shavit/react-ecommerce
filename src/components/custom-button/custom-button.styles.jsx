import styled, { css } from "styled-components";

const DefaultStyles = css`
  background-color: black;
  color: white;
  border: none;
  width: auto;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const InvertedButton = css`
  background-color: white;
  color: black;
  width: auto;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const ItemButton = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  position: absolute;
  opacity: 0.7;
  top: 255px;
  width: 80%;
  display: none;

  &:hover {
    display: flex;
    background-color: black;
    color: white;
    opacity: 0.85;
  }
`;

const GoogleButton = css`
  background-color: #4285f4;
  color: white;
  width: auto;
  border: none;

  &:hover {
    background-color: #3e7ee4;
  }
`;

const ButtonStyle = (props) => {
  if (props.inverted) {
    return InvertedButton;
  } else if (props.itemButton) {
    return ItemButton;
  } else if (props.signInWithGoogle) {
    return GoogleButton;
  } else {
    return DefaultStyles;
  }
};

export const CustomButtonContainer = styled.button`
  min-width: 125px;
  height: 50px;
  padding: 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;

  ${ButtonStyle}
`;
