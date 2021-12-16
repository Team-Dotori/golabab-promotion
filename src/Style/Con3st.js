import styled from "styled-components";

export const Content = styled.div`
  min-width: 17.5em;
  align-self: flex-end;
`;

export const Img = styled.div`
  padding-right: 7vw;
`;

export const Ment1 = styled.div`
  text-align: right;
  font-size: 3.6rem;
  font-weight: bold;
  div {
    display: inline;
    color: #ffacac;
  }
`;

export const Ment2 = styled.div`
  font-size: 1.4rem;
  font-weight: 400;
  color: #ae9696;
  padding-bottom: 3vh;
`;

export const Vote = styled.div`
  color: #ff5151;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: right;
  font-family: "Noto Sans KR";
  :hover {
    cursor: pointer;
  }
`;
