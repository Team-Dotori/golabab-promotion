import React from "react";
import styled from "styled-components";

const Vote = ({ name, btncolor, fontcolor }) => {
  return (
    <>
      <Link
        href={
          name === "투표하기"
            ? process.env.REACT_APP_VOTE
            : process.env.REACT_APP_HOMEPAGE
        }
      >
        <Button fontcolor={fontcolor} btncolor={btncolor}>
          {name}
        </Button>
      </Link>
    </>
  );
};

const Button = styled.button`
  width: 7vw;
  height: 5.2vh;
  font-size: 1.4rem;
  font-weight: bold;
  border-radius: 10px;
  border: none;
  font-family: "Noto Sans KR";
  margin-right: 3vh;
  cursor: pointer;

  background-color: ${(props) => props.btncolor || null};
  color: ${(props) => props.fontcolor || null};
`;

const Link = styled.a`
  text-decoration: none;
`;

export default Vote;
