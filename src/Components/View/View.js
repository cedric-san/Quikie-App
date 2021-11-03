import React from 'react';

const View = () => {
  return (
    <div className="homepage">
      <table className="table table-style">
        <thead className="thead-light">
          <tr>
            <th>Company Name</th>
            <th scope="col">Symbol</th>
            <th scope="col">Market Cap</th>
            <th scope="col"></th>
            <th scope="col">Current Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sankar</td>
            <td>ong</td>
            <td>$ 124.00</td>
            <td>
              <button className="btn btn-primary">Delete</button>
            </td>
            <td>$0.001</td>
          </tr>
          <tr>
            <td>Sankar</td>
            <td>ong</td>
            <td>$ 124.00</td>
            <td>
              <button className="btn btn-primary">Delete</button>
            </td>
            <td>$0.001</td>
          </tr>
          <tr>
            <td>Sankar</td>
            <td>ong</td>
            <td>$ 124.00</td>
            <td>
              <button className="btn btn-primary">Delete</button>
            </td>
            <td>$0.001</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default View;
