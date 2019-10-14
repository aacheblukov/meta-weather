import React from "react";
import "./style.css";
const HeaderItem = ({
  text,
  isActive,
  handleClick
}: {
  text: string;
  isActive: boolean;
  handleClick(text: string): void;
}) => (
  <span className={isActive ? "active" : ""} onClick={() => handleClick(text)}>
    {text}
  </span>
);
export default HeaderItem;
