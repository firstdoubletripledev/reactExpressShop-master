import React from "react";
import { LeftColumn } from "./Collumn/LeftColumn";
import { RightColumn } from "./Collumn/RightColumn";

const Container = () => {
  return (
    <div className="container">
      <div className="row">
        <LeftColumn/>
        <RightColumn />
      </div>
    </div>
  );
};

export default Container;
