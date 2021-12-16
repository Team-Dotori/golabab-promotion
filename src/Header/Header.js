import React from "react";
import * as S from "../Style/Headerst";
import * as I from "../assets/index";

const Header = () => {
  return (
    <S.Header>
      <S.Head>
        <I.GolababLogo />
        <S.Menulist>
          <S.Nav href={process.env.REACT_APP_RESULT} rel="noreferrer">
            Rank
          </S.Nav>
          <S.Nav href={process.env.REACT_APP_VOTE} rel="noreferrer">
            Discord
          </S.Nav>
          <S.Nav href={process.env.REACT_APP_HOMEPAGE} rel="noreferrer">
            About us
          </S.Nav>
        </S.Menulist>
      </S.Head>
    </S.Header>
  );
};

export default Header;
