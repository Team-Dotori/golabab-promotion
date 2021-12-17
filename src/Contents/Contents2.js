import React from "react";
import * as S from "../Style/Con2st";
import ArrangeMiddleSection, { ArrangeTwoElement } from "../Style/Arrange";

const Contents2 = () => {
  return (
    <ArrangeMiddleSection>
      <ArrangeTwoElement>
        <S.Content>
          <S.H>
            지금은
            <br />
            <S.Pink>골라밥</S.Pink>이<br />
            필요한 순간
          </S.H>
          <S.P>
            골라밥에게 맛있었던 메뉴를 알려주세요!
            <br />
            매달 2회, 영양사 선생님께 투표 결과를 전달해드립니다.
          </S.P>
        </S.Content>
        <S.Div2>
          <S.Aside1>급식이 너무 짠 것 같아요.</S.Aside1>
          <S.Aside2>음식이 덜 익어서 나와요.</S.Aside2>
          <S.Aside3>반찬 양이 너무 적어요.</S.Aside3>
          <S.Aside4>메뉴가 한정적이에요.</S.Aside4>
          <S.Aside5>로제떡볶이 먹고 싶어요.</S.Aside5>
        </S.Div2>
      </ArrangeTwoElement>
    </ArrangeMiddleSection>
  );
};
export default Contents2;
