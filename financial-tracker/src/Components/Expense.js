import React, { useEffect, useState } from 'react';
import DataMapper from './Chart';
import fetchData from './fetchData';

const Expense = ({ selectedCategory }) => {
  console.log(selectedCategory);
  const [data, setData] = useState(null);

    useEffect(() => {
        fetchData(selectedCategory)
            .then(fetchedData => {
        const transformedData = fetchedData.map(item => {
            if (item.length === 3) {
              return {
                date: item[0],
                name: item[1],
                amount: item[2],
                category: 'Unknown'
              };
            } else if (item.length === 4) {
              return {
                date: item[0],
                name: item[1],
                amount: item[2],
                category: item[3]
              };
            } else {
              console.error('Unexpected data format:', item);
              return null;
            }
          }).filter(item => item !== null); 
  
          setData(transformedData);
        })
            .catch(error => console.error("can't catch promise", error));
    }, [setData]);

    return (
        <div>
            {data ? (
                <DataMapper jsonData={data} />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Expense;
