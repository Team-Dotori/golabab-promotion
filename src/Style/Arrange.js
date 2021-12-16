import styled from "styled-components";
import device from "../config/reactive";

/**
 * 1개의 자식 요소를 가운데 정렬하기 위해 사용할 수 있습니다.
 *
 * @param {string} height: Section height, default: 60vh
 * @param {string} backgroundColor: Section background color
 */
const ArrangeMiddleSection = styled.section`
  width: 100%;
  height: ${(p) => p.height || "auto"};
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: ${(p) => p.backgroundColor};
  padding: 100px 0;
`;

/**
 * 2개의 자식 요소를 가운데 정렬하기 위해 사용할 수 있습니다.
 */
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
