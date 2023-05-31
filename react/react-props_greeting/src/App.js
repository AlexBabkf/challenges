import "./styles.css";

export default function App({ name }) {
  return <h1>Hello, {name == "smn" ? "Coach" : name}!</h1>;
}
