import Link from "next/link";
import Image from "next/image";

export default function books(book) {
  return (
    <div>
      <Link href="../">All Volumes</Link>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <ul>
        <li>
          {book.books[0].ordinal}: {book.books[0].title}
        </li>
        <li>
          {" "}
          {book.books[1].ordinal}: {book.books[1].title}
        </li>
      </ul>
      <Image
        src="/images/the-fellowship-of-the-ring.png"
        alt="cover"
        width={140}
        height={230}
      />
    </div>
  );
}
