import React from "react";
import { toast } from "react-toastify";

const Alerts = () => {
  const notify = () => {
    toast.info("BTC dropped below $30,000!");
  };

  return (
    <div className="my-6">
      <h2 className="text-xl font-semibold mb-2">Alerts & Notifications</h2>
      <button onClick={notify} className="bg-red-500 text-white px-4 py-2 rounded">
        Simulate Alert
      </button>
    </div>
  );
};

export default Alerts;
