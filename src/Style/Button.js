import styled from "styled-components";

const Button = styled.button`
  padding: 15px 20px;
  border-radius: 5px;
  font-size: 1.4rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
  margin-right: 20px;

  background-color: ${(p) => p.buttonColor || null};
  color: ${(p) => p.fontColor || null};
`;

export default Button;
