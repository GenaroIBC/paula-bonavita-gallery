import { useRouter } from "next/router";

export default function Collection() {
  const router = useRouter();
  return <div>Collection {router.query.title}</div>;
}
