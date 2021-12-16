import React from "react";
import * as S from "../Style/Con3st";
import * as I from "../assets/index";
import ArrangeMiddleSection, { ArrangeTwoElement } from "../Style/Arrange";

const Contents3 = () => {
  return (
    <ArrangeMiddleSection>
      <ArrangeTwoElement>
        <S.Img>
          <I.ConThreeImg />
        </S.Img>
        <S.Content>
          <S.Ment1>
            더욱 편하게
            <br />
            <div>투표</div>를 할 수 있도록
          </S.Ment1>
          <S.Ment2>웹보다 더 친근한 디스코드로 여러분께 다가갑니다.</S.Ment2>
          <a href={process.env.REACT_APP_VOTE}>
            <S.Vote>
              투표하기
              <I.Union />
            </S.Vote>
          </a>
        </S.Content>
      </ArrangeTwoElement>
    </ArrangeMiddleSection>
  );
};

export default Contents3;
