import { introduction, volumes } from "public/lib/data.js";
import Link from "next/link.js";

export default function HomePage() {
  const tFotR = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  const tTt = volumes.find(({ slug }) => slug === "the-two-towers");
  console.log(tTt);
  const tRotK = volumes.find(({ slug }) => slug === "the-return-of-the-king");

  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        <li>
          {" "}
          <Link href={tFotR.slug}>{tFotR.title}</Link>
        </li>
        <li>
          <Link href={tTt.slug}>{tTt.title}</Link>
        </li>
        <li>
          <Link href={tRotK.slug}>{tRotK.title}</Link>
        </li>
      </ul>
    </div>
  );
}
