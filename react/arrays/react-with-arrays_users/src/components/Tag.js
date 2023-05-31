import "./Tag.css";

export default function Tag({ tag }) {
  return (
    <li className={tag == "admin" ? "tag tag--highlight" : "tag"}>{tag}</li>
  );
  // return tag == "admin" ? (
  //   <li className="tag--highlight">{tag}</li>
  // ) : (
  //   <li className="tag">{tag}</li>
  // );
}
