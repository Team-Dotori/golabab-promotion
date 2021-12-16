import styled from "styled-components";
import device from "../config/reactive";

const ArrangeMiddleSection = styled.section`
  width: 100%;
  height: ${(p) => p.height || "auto"};
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: ${(p) => p.backgroundColor};
  padding: 100px 0;
`;

export const ArrangeTwoElement = styled.div`
  width: 60vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${device.medium} {
    flex-direction: column;
  }
`;

export default ArrangeMiddleSection;
