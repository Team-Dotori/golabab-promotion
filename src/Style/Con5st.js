import styled from "styled-components";

export const Contents5 = styled.div`
  background-color: #ffacac;
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const Ment1 = styled.div`
  font-size: 3.6rem;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
  padding-top: 20vh;
  font-family: "Noto Sans";
`;

export const Ment2 = styled.div`
  font-size: 1.4rem;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
  padding-bottom: 5vh;
  font-family: "Noto Sans KR";
`;

export const Votebutton = styled.button`
  width: 7vw;
  height: 5.2vh;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: "Noto Sans KR";
  border-radius: 5px;
  border: none;
  color: #663e3e;
  background-color: #ffeaea;
  margin: 0 auto 15vh;
  :hover {
    cursor: pointer;
  }
`;
