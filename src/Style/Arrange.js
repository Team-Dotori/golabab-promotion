import styled from "styled-components";

const ArrangeMiddleSection = styled.section`
  width: 100%;
  height: ${(p) => p.height || "70vh"};
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: ${(p) => p.backgroundColor};
`;

export const ArrangeTwoElement = styled.div`
  width: 70vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default ArrangeMiddleSection;
