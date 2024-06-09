import React from 'react';
import TransactionItem from './TransactionItem';

const DataMapper = ({ jsonData }) => {
  console.log(jsonData);

  if (!Array.isArray(jsonData)) {
    return <div>No data available</div>;
  }

  return (
    <div>
      {jsonData.map((item, index) => (
        <TransactionItem
          key={index}
          title={item.name}
          date={item.date}
          amount={item.amount}
        />
      ))}
    </div>
  );
};

export default DataMapper;