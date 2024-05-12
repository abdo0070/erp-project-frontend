import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { AuthProvidor } from "./context/AuthContext";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { router } from "./router";
import Footer from "./components/Footer";
import { SearchProvidor } from "./context/SearchContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SearchProvidor>
      <AuthProvidor>
        <RouterProvider router={router} />
      </AuthProvidor>
    </SearchProvidor>
    <Footer />
  </React.StrictMode>
);
reportWebVitals();
