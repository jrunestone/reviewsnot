import React from 'react';
import { defer, Await, useLoaderData, Navigate } from "react-router-dom";
import Loader from "../components/loader";

export async function loader({ params }) {
  return defer({
    item: fetch(`https://func-reviewsnot-euw.azurewebsites.net/api/reviews/random`).then(res => { if (!res.ok) { throw res.status }; return res.json(); })
  })
}

export default function RandomItemPage() {
  const data = useLoaderData();

  return (
    <React.Suspense fallback={<Loader />}>
        <Await resolve={data.item}> 
          {(item) => (
            <Navigate to={`/${item.id}`}/>
          )}
        </Await>
      </React.Suspense>
  );
}