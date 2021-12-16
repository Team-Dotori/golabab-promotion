import React from "react";
import * as S from "../Style/Con1st";
import * as I from "../assets/index";
import { LinkButton } from "../Components/Button";
import ArrangeMiddleSection, { ArrangeTwoElement } from "../Style/Arrange";

const Contents1 = () => {
  return (
    <>
      <ArrangeMiddleSection backgroundColor={"rgb(255, 234, 234)"}>
        <ArrangeTwoElement>
          <S.Content>
            <S.Ment1>
              오늘 급식
              <br />
              어떠셨나요?
            </S.Ment1>
            <S.Ment2>
              도토리가 만드는 새로운
              <br />
              급식투표봇 Golabab입니다.
            </S.Ment2>
            <S.Votebtn>
              <LinkButton
                buttonColor="#FFACAC"
                fontColor="#663E3E"
                name="투표하기"
                link={process.env.REACT_APP_VOTE}
              />
              <LinkButton
                buttonColor="#F1DCDC"
                fontColor="#FFFFFF"
                name="투표결과"
                link={process.env.REACT_APP_RESULT}
              />
            </S.Votebtn>
          </S.Content>
          <S.ImgWrap>
            <I.ConOneImg />
          </S.ImgWrap>
        </ArrangeTwoElement>
      </ArrangeMiddleSection>
    </>
  );
};

export default Contents1;
