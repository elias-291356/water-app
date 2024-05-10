import React from "react";
import { Link, useNavigate } from "react-router-dom";

const WaterСonsumptionTracker = () => {
  const navigate = useNavigate();
  const onClickToSignupPage = () => {
    navigate("/sign-up");
  };

  return (
    <>
      <h1>Water consumption tracker</h1>
      <h2>Record daily water intake and track</h2>
      <p>Tracker Benefits</p>
      <ul>
        <li>Habit drive</li>
        <li>View statistics</li>
        <li>Personal rate setting</li>
      </ul>
      <button type="button" onClick={onClickToSignupPage}>
        Try tracker
      </button>
    </>
  );
};

export default WaterСonsumptionTracker;
