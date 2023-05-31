import "./FavoriteButton.css";
import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as Star } from "./star.svg";
import { React, useEffect, useState } from "react";

export default function FavoriteButton() {
  // this should be a state variable
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    console.log("TEXT");
  }, [isFavorite]);
  useEffect(() => {
    console.log("dwdawd");
  }, []);
  return (
    <button
      className="favorite-button"
      onClick={() => {
        setIsFavorite((state) => !state);
        console.log("favorite button clicked");
      }}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
