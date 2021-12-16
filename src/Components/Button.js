import React from "react";
import SButton from "../Style/Button";

const Button = ({ name, buttonColor, fontColor }) => {
  return (
    <SButton fontColor={fontColor} buttonColor={buttonColor}>
      {name}
    </SButton>
  );
};

export const LinkButton = ({ name, buttonColor, fontColor, link }) => {
  return (
    <a href={link}>
      <Button buttonColor={buttonColor} fontColor={fontColor} name={name} />
    </a>
  );
};

export default Button;
