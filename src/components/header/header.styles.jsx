import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-bottom: 8px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  padding: 16px;
`;

export const OptionsContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: flex-end;
  align-items: center;
  font-size: 1.2rem;
`;

export const OptionLinkContainer = styled(Link)`
  margin-left: 1.5rem;
  cursor: pointer;
`;
