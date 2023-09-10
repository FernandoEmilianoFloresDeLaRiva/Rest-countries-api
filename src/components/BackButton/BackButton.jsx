import React from "react";
import "./BackButton.css";
import back from "../../assets/back.svg";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const changePage = useNavigate();
  const goBack = () => changePage("/");
  return (
    <button onClick={goBack} className="buttonBack">
      <img src={back} className="imgBack"/>
      <p>Back</p>
    </button>
  );
}

export default BackButton;
