import useSWR from "swr";
import { useRouter } from "next/router";

export default function Fetcher() {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useSWR(id ? `/api/products/${id}` : null);

  if (!data) {
    return <h1>Loading data...</h1>;
  }

  return <h1>{data.name}</h1>;
}
