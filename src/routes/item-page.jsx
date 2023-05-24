import React from 'react';
import { defer, Await, useLoaderData } from "react-router-dom";
import Loader from "../components/loader";
import ReviewCard from "../components/review-card";

export async function loader({ params }) {
  return defer({
    item: fetch(`https://func-reviewsnot-euw.azurewebsites.net/api/reviews/${params.itemId}`).then(res => { if (!res.ok) { throw res.status }; return res.json(); })
  })
}

export default function ItemPage() {
  const data = useLoaderData();
  
  return (
    <div id="item-page">
      <React.Suspense fallback={<Loader />}>
        <Await resolve={data.item}> 
          {(item) => (
            <ReviewCard rating={item.rating} text={item.text} />
          )}
        </Await>
      </React.Suspense>
    </div>
  );
}