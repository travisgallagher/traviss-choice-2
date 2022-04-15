import React from "react";
import { DynamicButton } from "../dynamicButton";

export const Restaurants = () => {
  return (
    <div>
      <DynamicButton fn={() => alert("uo")} title="Load Restaurants" />
    </div>
  );
};
