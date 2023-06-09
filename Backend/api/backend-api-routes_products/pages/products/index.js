import useSWR from "swr";

export default function Fetcher() {
  const { data } = useSWR("/api/products");

  if (!data) {
    return <h1>Loading data...</h1>;
  }

  //   id: "7",
  //   name: "Rainbow fish",
  //   description: "In all colors",
  //   price: 12,
  //   currency: "€",
  //   category: "Freshwater",

  return (
    <div>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <h1>{product.name}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
}
