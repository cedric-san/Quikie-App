import React from 'react';
import './Table.css';
const Table = () => {
  return (
    <div>
      <h3>Stock Detail Table</h3>
      <input type="text" placeholder="Search by Company Name" />

      <table className="table table-bordered table-style">
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Symbol</th>
            <th>Market Cap</th>
            <th></th>
            <th>Current Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sankar</td>
            <td>ong</td>
            <td>$ 124.00</td>
            <td>
              <button className="btn btn-primary">View</button>
            </td>
            <td>$0.001</td>
          </tr>
          <tr>
            <td>Sankar</td>
            <td>ong</td>
            <td>$ 124.00</td>
            <td>
              <button className="btn btn-primary">View</button>
            </td>
            <td>$0.001</td>
          </tr>
          <tr>
            <td>Sankar</td>
            <td>ong</td>
            <td>$ 124.00</td>
            <td>
              <button className="btn btn-primary">View</button>
            </td>
            <td>$0.001</td>
          </tr>
          <tr>
            <td>Sankar</td>
            <td>ong</td>
            <td>$ 124.00</td>
            <td>
              <button className="btn btn-primary">View</button>
            </td>
            <td>$0.001</td>
          </tr>
          <tr>
            <td>Sankar</td>
            <td>ong</td>
            <td>$ 124.00</td>
            <td>
              <button className="btn btn-primary">View</button>
            </td>
            <td>$0.001</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Table;
