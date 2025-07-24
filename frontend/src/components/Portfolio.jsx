import React from 'react';

const Portfolio = () => {
  return (
    <div className="portfolio-overview">
      <h2>Portfolio Overview</h2>
      <table className="portfolio-table">
        <thead>
          <tr>
            <th>Asset</th>
            <th>Type</th>
            <th>Quantity</th>
            <th>Current Price</th>
            <th>Total Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bitcoin</td>
            <td>Crypto</td>
            <td>2.5</td>
            <td>$29,500</td>
            <td>$73,750</td>
          </tr>
          <tr>
            <td>Apple Inc.</td>
            <td>Stock</td>
            <td>50</td>
            <td>$195</td>
            <td>$9,750</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Portfolio;
