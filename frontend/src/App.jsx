import React from "react";
import Chart from "/Users/ayushman/Downloads/finsight/frontend/src/components/chart.jsx";
import QueryBox from "/Users/ayushman/Downloads/finsight/frontend/src/components/QueryBox.jsx";
import Portfolio from "/Users/ayushman/Downloads/finsight/frontend/src/components/Portfolio.jsx";
import Alerts from "/Users/ayushman/Downloads/finsight/frontend/src/components/alerts.jsx";
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
