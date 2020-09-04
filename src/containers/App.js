import React from "react";
import Routes from "../routes/Routes";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <div className="container">
      <Routes />
      <ToastContainer autoClose={3000} />
    </div>
  );
}
