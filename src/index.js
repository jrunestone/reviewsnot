import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./router";

const root = ReactDOM.createRoot(document.getElementById('root'));
const goToRandomItem = () => window.location = '/';

root.render(
  <React.StrictMode>
    <main id="component-container" onClick={goToRandomItem}>
      <RouterProvider router={router} />
    </main>
  </React.StrictMode>
);