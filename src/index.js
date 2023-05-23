import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./router";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <main id="component-container">
      <RouterProvider router={router} />
    </main>
  </React.StrictMode>
);