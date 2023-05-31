import React from "react";
import "./styles.css";

export default function App() {
  return (
    <article className="article">
      <h2 className="article__title">h2 component</h2>
      <label htmlFor="tag"></label>
      <input id="tag"></input>
      <a
        className="article__link"
        href="https://github.com/spiced-academy/chicory-web-dev/blob/main/sessions/react-basics/react-basics.md"
      >
        git link
      </a>
    </article>
  );
}
