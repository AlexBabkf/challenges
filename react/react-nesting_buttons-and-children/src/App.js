import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>First</Button>
      <Button>#2</Button>
      <Button>3d</Button>
      <Button>Tessera</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
