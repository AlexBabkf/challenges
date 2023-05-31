import { volumes } from "public/lib/data.js";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Books() {
  const router = useRouter();
  // useEffect(() => {
  //   if (router.isReady) {

  //   }
  // }, [router.isReady]);
  const { slug } = router.query;
  const book = volumes.filter((volume) => volume.slug === slug)[0];
  console.log(book);
  if (!book) {
    return null;
  }
  return (
    <div>
      <Link href="/">All Volumes</Link>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <ul>
        <li key={book.id}>
          {book.books[0].ordinal}: {book.books[0].title}
        </li>
        <li>
          {" "}
          {book.books[1].ordinal}: {book.books[1].title}
        </li>
      </ul>
      <Image src={book.cover} alt="cover" width={140} height={230} />
    </div>
    // ))}
  );
}

// export default function book() {
//   const tFotR = volumes.find(
//     ({ slug }) => slug === "the-fellowship-of-the-ring"
//   );
//   console.log(tFotR);
//   return books(tFotR);
// }
