import React, { useState, useEffect } from "react";
import { NavBar } from "../navigation";
import { Restaurants } from "../resteraunts";
import { DynamicButton } from "../dynamicButton";
import "./index.css";

export const Home = () => {
  const [pageTitle, setPageTitle] = useState<string>(
    "Welcome to Travis's Choice!"
  );
  const [isStarted, setIsStarted] = useState<boolean>(false);

  const getStarted = () => {
    setPageTitle("Enter your information");
    setIsStarted(true);
  };

  return (
    <div className="home">
      <h1>{pageTitle}</h1>
      {!isStarted ? (
        <div className="instructions">
          <h2>What Is Travis's Choice?</h2>
          <p>
            Can't decide where to eat? Let Travis's Choice help you out! Our
            random restaurant generator will decide where you eat with the click
            of a button. All you have to do is follow the Instructions, sit
            back, and enjoy!
          </p>
          <h2>Instructions</h2>
          <ol>
            <li>Enter your ZIP code</li>
            <li>
              Select the number of restaurants you would like to appear, and
              press load restaurants
            </li>
            <li>Pick the restaurants you want Travis to consider</li>
            <li>Push the "Travis Choose" button, and enjoy!</li>
          </ol>
          <DynamicButton fn={getStarted} title="Get Started" />
        </div>
      ) : (
        <Restaurants />
      )}
    </div>
  );
};
