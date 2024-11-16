import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
import { ContextProvide } from './component/Context';

import { router } from "./containers/route";
import { RouterProvider } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvide>
    <RouterProvider router={router} />
    </ContextProvide>
    {/* <App /> */}
   
  </React.StrictMode>
);
reportWebVitals();
