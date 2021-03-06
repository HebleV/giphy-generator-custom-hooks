import { useState, useEffect } from "react";
import axios from "axios";
// const API_KEY = process.env.API_KEY_REACT;

const useGif = (tag) => {
  const [gif, setGif] = useState("");

  const fetchGif = async (tag) => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=g2YQPfl4oCsBYPMoaIWoVofIYOgQC43n`;
    const response = await axios.get(tag ? `${url}&tag=${tag}` : url);
    const imgSrc = response.data.data.images.downsized_large.url;
    setGif(imgSrc);
    return response;
  };

  useEffect(() => {
    fetchGif(tag);
  }, [tag]);

  return { gif, fetchGif };
};

export default useGif;
