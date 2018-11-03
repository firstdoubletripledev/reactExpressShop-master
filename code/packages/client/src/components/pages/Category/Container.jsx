import React from "react";
import { LeftColumn } from "./Column/LeftColumn";
import { RightColumn } from "./Column/Right/RightColumn";

const Container = () => {
  return (
    <div className="container">
      <div className="row">
        <LeftColumn />
        <RightColumn />
      </div>
    </div>
  );
};

export default Container;
