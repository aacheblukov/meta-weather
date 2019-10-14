import React from "react";
import HeaderItem from "./HeaderItem";
import { SectionType } from "../../constants";

const Toggler = ({
  handleClick,
  activeItem
}: {
  handleClick(text: string): void;
  activeItem: string;
}) => {
  return (
    <div className="header-wrapper">
      <HeaderItem
        text={SectionType.TODAY}
        isActive={activeItem === SectionType.TODAY}
        handleClick={handleClick}
      />
      <HeaderItem
        text={SectionType.WEEK}
        isActive={activeItem === SectionType.WEEK}
        handleClick={handleClick}
      />
    </div>
  );
};
export default Toggler;
