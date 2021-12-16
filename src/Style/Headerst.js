import styled from "styled-components";
import device from "../config/reactive";

export const Header = styled.header`
  width: 100%;
  height: 20%;
  background-color: #ffeaea;
  display: flex;
  justify-content: center;
`;

export const Head = styled.div`
  width: 60vw;
  height: 100%;
  display: flex;
  justify-content: space-between;
  @media ${device.small} {
    justify-content: center;
  }
`;

export const Menulist = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 300px;
  font-size: 1.5rem;
  font-weight: 600;
  font-family: "Noto Sans KR";
  @media ${device.small} {
    display: none;
  }
`;

export const Nav = styled.a`
  text-decoration: none;
  color: #573719;
  display: flex;
  justify-content: space-between;
  :hover {
    color: rgba(0, 0, 0, 0.6);
  }
`;
