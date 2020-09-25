import React, { useState, useEffect } from "react";
import axios from "axios";
const API_KEY = process.env.API_KEY_REACT;

const TagGiphy = () => {
  const [gif, setGif] = useState("");
  const [tag, setTag] = useState("dogs");

  const fetchGif = async (tag) => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=&tag=${tag}`;
    const response = await axios.get(url);
    console.log({ response });
    const imgSrc = response.data.data.images.downsized_large.url;
    setGif(imgSrc);
    return response;
  };
  useEffect(() => {
    fetchGif(tag);
  }, [tag]);

  const handleClick = () => {
    fetchGif(tag);
  };
  return (
    <div class='container'>
      <h1>{tag} Giphy</h1>
      <img width='500' alt='taggifs' src={gif} />
      <input type='text' value={tag} onChange={(e) => setTag(e.target.value)} />
      <button onClick={handleClick}>New Gif</button>
    </div>
  );
};

export default TagGiphy;
