import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { AuthProvidor } from "./context/AuthContext";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { router } from "./router";
import Footer from "./components/Footer";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvidor>
      <RouterProvider router={router} />
    </AuthProvidor>
    <Footer />
  </React.StrictMode>
);
reportWebVitals();
