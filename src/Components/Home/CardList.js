import React from 'react';
import './CardList.css';
import Card from './Card';

const CardList = (props) => {
  return (
    <>
      <div className="flex">
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};
export default CardList;
