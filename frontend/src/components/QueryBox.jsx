import React, { useState } from "react";
import axios from "axios";
import "../style.css";

const QueryBox = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  const handleQuery = async () => {
    try {
      const res = await axios.post("http://localhost:5000/query", { query });
      setResponse(res.data.answer);
    } catch (err) {
      console.error(err);
      setResponse("Something went wrong while fetching the response.");
    }
  };

  return (
    <div className="query-box">
      <h2>Ask in Natural Language</h2>
      <input
        className="query-input"
        type="text"
        placeholder="e.g. Show me my Bitcoin performance"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="query-button" onClick={handleQuery}>Ask</button>
      {response && <p className="query-response">{response}</p>}
    </div>
  );
};

export default QueryBox;
