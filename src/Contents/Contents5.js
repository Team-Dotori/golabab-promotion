import React from "react";
import * as S from "../Style/Con5st";
import { LinkButton } from "../Components/Button";
import ArrangeMiddleSection from "../Style/Arrange";

//react route 사용함 ㅋㅋ
const Contents5 = () => {
  return (
    <>
      <ArrangeMiddleSection backgroundColor={"#ffacac"} height={"700px"}>
        <S.Content>
          <S.Ment1>2021년 12월 골라밥 런칭완료</S.Ment1>
          <S.Ment2>골라밥이 여러분께 도착했어요!</S.Ment2>
          <S.Votebutton>
            <LinkButton
              buttonColor="#ffeaea"
              fontColor="#663e3e"
              name="개발서버"
              link={process.env.REACT_APP_DEV_SERVER}
            />
          </S.Votebutton>
        </S.Content>
      </ArrangeMiddleSection>
    </>
  );
};

export default Contents5;
