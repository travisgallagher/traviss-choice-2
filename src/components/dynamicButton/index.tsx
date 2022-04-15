import React from "react";
import "./index.css";

type DynamicProps = {
  title: string;
  fn: (props?: any) => void | any;
  // TODO*** Update return value based on api call
};

export const DynamicButton = ({ title, fn }: DynamicProps) => {
  return (
    <button onClick={fn} className="dynamic-button">
      {title}
    </button>
  );
};
