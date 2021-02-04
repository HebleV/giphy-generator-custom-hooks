import React, { useState } from "react";
import useGif from "../customhooks/useGif";

const TagGiphy = () => {
  const [tag, setTag] = useState("dogs");
  const { gif, fetchGif } = useGif(tag);
  // const throwError = () => {
  //   throw new Error("Sample Error !!!");
  // }
  return (
    <div className="container">
      <h1>{tag} Giphy</h1>
      <img width="500" alt="taggifs" src={gif} />
      <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} />
      <button onClick={() => fetchGif(tag)}>New Gif</button>
      {/* <button onClick={throwError}>Show Error</button> */}
    </div>
  );
};

export default TagGiphy;
