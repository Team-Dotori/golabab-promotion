import styled from "styled-components";
import device from "../config/reactive";

export const Content = styled.div`
  min-width: 17.5em;
  align-self: flex-start;
`;

export const Ment1 = styled.div`
  font-size: 3.6rem;
  font-weight: bold;
  padding-bottom: 30px;
`;

export const Ment2 = styled.div`
  font-size: 1.4rem;
  font-weight: 400;
  color: #ae9696;
  padding-bottom: 80px;
`;

export const Votebtn = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ImgWrap = styled.div`
  @media ${device.medium} {
    display: none;
  }
`;
