import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { AuthProvidor } from "./context/AuthContext";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { router } from "./router";
import Footer from "./components/Footer";
import { SearchProvidor } from "./context/SearchContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SearchProvidor>
      <AuthProvidor>
        <div className="bg-soft-gray">
          <App />
        </div>
      </AuthProvidor>
    </SearchProvidor>
  </React.StrictMode>
);
reportWebVitals();
