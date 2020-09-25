import React, { useState, useEffect } from "react";
import axios from "axios";
const API_KEY = process.env.API_KEY_REACT;

const RandomGiphy = () => {
  const [gif, setGif] = useState("");

  const fetchGif = async () => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=`;
    const response = await axios.get(url);
    console.log({ response });
    const imgSrc = response.data.data.images.downsized_large.url;
    setGif(imgSrc);
    return response;
  };
  useEffect(() => {
    fetchGif();
  }, []);

  const handleClick = () => {
    fetchGif();
  };
  return (
    <div class='container'>
      <h1>random Giphy</h1>
      <img src={gif} width='500' alt='randomgifs' />
      <button onClick={handleClick}>New Gif</button>
    </div>
  );
};

export default RandomGiphy;
