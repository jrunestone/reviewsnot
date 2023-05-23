import { createBrowserRouter } from "react-router-dom";
import RootPage from './routes/root-page';
import ErrorPage from './routes/error-page';
import ItemPage, { loader as itemLoader } from './routes/item-page';
import RandomItemPage, { loader as randomItemLoader } from './routes/random-item-page';

export default createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,

    children: [
      {
        errorElement: <ErrorPage />,

        children: [
          {
            index: true,
            element: <RandomItemPage />,
            loader: randomItemLoader
          },

          {
            path: "/:itemId",
            element: <ItemPage />,
            loader: itemLoader
          }
        ]
      }
    ]
  }
]);