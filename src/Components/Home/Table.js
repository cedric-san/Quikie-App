import React, { useState, useEffect } from 'react';
import './Table.css';
const Table = () => {
  const array = [
    {
      name: 'sankar',
      symbol: 'usd',
      marketCap: '$123.0',
      currentPrice: '$100.0',
    },
    {
      name: 'sankar',
      symbol: 'usd',
      marketCap: '$123.0',
      currentPrice: '$100.0',
    },
    {
      name: 'sankar',
      symbol: 'usd',
      marketCap: '$123.0',
      currentPrice: '$100.0',
    },
    {
      name: 'sankar',
      symbol: 'usd',
      marketCap: '$123.0',
      currentPrice: '$100.0',
    },
    {
      name: 'sankar',
      symbol: 'usd',
      marketCap: '$123.0',
      currentPrice: '$100.0',
    },
  ];
  const [list, setList] = useState([]);
  const [buttonStatus, setButtonStatus] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setList(array);
    }, 3000);
  }, [list]);
  setTimeout(() => {
    setButtonStatus(!buttonStatus);
  }, 6000);

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
          {list.map((data) => {
            return (
              <tr>
                <td>{data.name}</td>
                <td>{data.symbol}</td>
                <td>{data.marketCap}</td>
                <td>
                  <button className="btn btn-primary">
                    {buttonStatus ? 'Save Data' : 'View'}
                  </button>
                </td>
                <td>{data.currentPrice}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
