import React from "react";
import useGif from "../customhooks/useGif";

const RandomGiphy = () => {
  const { gif, fetchGif } = useGif();

  return (
    <div className="container">
      <h1>random Giphy</h1>
      <img src={gif} width="500" alt="randomgifs" />
      <button onClick={fetchGif}>New Gif</button>
    </div>
  );
};

export default RandomGiphy;
