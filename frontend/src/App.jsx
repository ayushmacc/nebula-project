import React from "react";
import Preloader from "./components/preloader.jsx";
import Chart from "./components/chart.jsx";
import QueryBox from "./components/QueryBox.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Alerts from "./components/alerts.jsx";
import Login from "./components/login.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="p-4 font-sans">
      <h1 className="text-3xl font-bold mb-6 text-center">Finance Dashboard</h1>
      <QueryBox />
      <Chart />
      <Portfolio />
      <Alerts />
      <ToastContainer />
    </div>
  );
};

export default App;
