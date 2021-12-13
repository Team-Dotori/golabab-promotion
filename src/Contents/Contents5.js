import React from "react";
import * as S from "../Style/Con5st";

//react route 사용함 ㅋㅋ
const Contents5 = () => {
  return (
    <>
      <S.Contents5>
        <S.Content>
          <S.Ment1>2021년 12월 골라밥 런칭완료</S.Ment1>
          <S.Ment2>골라밥이 여러분께 도착했어요!</S.Ment2>
          <a href={process.env.REACT_APP_DEV_SERVER}>
            <S.Votebutton>개발서버</S.Votebutton>
          </a>
        </S.Content>
      </S.Contents5>
    </>
  );
};

export default Contents5;
