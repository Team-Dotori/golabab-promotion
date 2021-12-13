import React from "react";
import * as S from "../Style/Headerst";
import * as I from "../assets/index";

const Header = () => {
  return (
    <>
      <S.Header>
        <S.Head>
          <S.Iconimg>
            <I.GolababLogo />
          </S.Iconimg>
          <S.Menulist>
            <a href={process.env.REACT_APP_RESULT} rel="noreferrer">
              <p>Rank</p>
            </a>
            <a href={process.env.REACT_APP_VOTE} rel="noreferrer">
              <p>Discord</p>
            </a>
            <a href={process.env.REACT_APP_HOMEPAGE} rel="noreferrer">
              <p>About us</p>
            </a>
          </S.Menulist>
        </S.Head>
      </S.Header>
    </>
  );
};

export default Header;
