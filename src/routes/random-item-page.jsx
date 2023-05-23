import { redirect } from "react-router-dom";
import Loader from "../components/loader";

export async function loader({ params }) {
  const item = { id: params.id || "random-id", rating: 5, text: "Random foobar" };
  return redirect(`/${item.id}`);
}

export default function RandomItemPage() {
  return (
    <Loader />
  );
}