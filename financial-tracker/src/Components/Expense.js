import React, { useEffect } from 'react';
import DataMapper from './Chart';
import fetchData from './fetchData';


const Expense = ({setData, data}) => {

    useEffect(() => {
        fetchData()
            .then(fetchedData => setData(fetchedData))
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
