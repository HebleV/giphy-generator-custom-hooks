import React from "react";
import useGif from "../customhooks/useGif";

const RandomGiphy = () => {
  const { gif } = useGif();
  const throwError = () => {
    throw new Error("Sample Error !!!");
  }
  return (
    <div className="container">
      <h1>random Giphy</h1>
      <img src={gif} width="500" alt="randomgifs" />
      <button onClick={throwError}>New Gif</button>
    </div>
  );
};

export default RandomGiphy;
