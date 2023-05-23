import React from 'react';
import { defer, Await, useLoaderData } from "react-router-dom";
import Loader from "../components/loader";
import ReviewCard from "../components/review-card";

export async function loader({ params }) {
  // const item = { id: params.id || "random-id", rating: 2, text: "Foobar" }; //await getContact(params.contactId);
  // return item;

  let p = new Promise((resolve, reject) => { setTimeout(() => {console.log('resolve');resolve();}, 2000); });
  return defer({
    p: fetch('https://dummyjson.com/products'),
    item: { id: params.id || "random-id", rating: 2, text: "Foobar" }
  })
}

export default function ItemPage() {
  const { item } = useLoaderData();
  
  // throw new Response("", {
  //   status: 404,
  //   statusText: "Not Found",
  // });

  return (
    <div id="item-page">
      <React.Suspense fallback={<Loader />}>
        <Await resolve={item} errorElement={<h1>Oops!</h1>}>
          {(item) => (
            <ReviewCard rating={item.rating} text={item.text} />
          )}
        </Await>
      </React.Suspense>
    </div>
  );
}